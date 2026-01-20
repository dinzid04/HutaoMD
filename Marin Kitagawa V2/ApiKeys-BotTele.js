require('dotenv').config();

global.pay = {
    apikey: process.env.PAY_APIKEY || "CiaaTopUp_ylddpmphwjwq4rb2",
    fee: Number(process.env.PAY_FEE) || 300,
    metode: process.env.PAY_METODE || 'QRISFAST',
    expiredMs: Number(process.env.PAY_EXPIRE_MS) || (30 * 60 * 1000)
};