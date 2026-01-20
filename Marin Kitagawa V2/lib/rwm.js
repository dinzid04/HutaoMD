const fs = require('fs')
const axios = require('axios')
const FormData = require('form-data')

async function ezremove(path) {
  const form = new FormData()
  form.append('image_file', fs.createReadStream(path), path.split('/').pop())

  const create = await axios.post(
    'https://api.ezremove.ai/api/ez-remove/watermark-remove/create-job',
    form,
    {
      headers: {
        ...form.getHeaders(),
        'User-Agent': 'Mozilla/5.0',
        origin: 'https://ezremove.ai',
        'product-serial': 'sr-' + Date.now()
      }
    }
  ).then(v => v.data).catch(() => null)

  if (!create || !create.result || !create.result.job_id) {
    return { status: 'error' }
  }

  const job = create.result.job_id

  for (let i = 0; i < 10; i++) {
    await new Promise(r => setTimeout(r, 2000))

    const check = await axios.get(
      `https://api.ezremove.ai/api/ez-remove/watermark-remove/get-job/${job}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          origin: 'https://ezremove.ai',
          'product-serial': 'sr-' + Date.now()
        }
      }
    ).then(v => v.data).catch(() => null)

    if (check && check.code === 100000 && check.result && check.result.output) {
      return { job, result: check.result.output[0] }
    }

    if (!check || !check.code || check.code !== 300001) break
  }

  return { status: 'processing', job }
}

module.exports = { ezremove }