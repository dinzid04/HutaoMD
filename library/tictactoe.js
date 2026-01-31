const { createCanvas, loadImage } = require('@napi-rs/canvas')

class TicTacToe {
    constructor(id, playerX, playerO) {
        this.id = id
        this.playerX = playerX
        this.playerO = playerO
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.turn = playerX
        this.winner = null
        this.isDraw = false
    }

    async toCanvas() {
        const width = 600
        const height = 600
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = '#1a1a1a'
        ctx.fillRect(0, 0, width, height)

        const gradient = ctx.createLinearGradient(0, 0, width, height)
        gradient.addColorStop(0, '#2b2b2b')
        gradient.addColorStop(1, '#000000')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)

        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 10
        ctx.lineCap = 'round'

        ctx.beginPath()
        ctx.moveTo(200, 20)
        ctx.lineTo(200, 580)
        ctx.moveTo(400, 20)
        ctx.lineTo(400, 580)
        ctx.moveTo(20, 200)
        ctx.lineTo(580, 200)
        ctx.moveTo(20, 400)
        ctx.lineTo(580, 400)
        ctx.stroke()

        for (let i = 0; i < 9; i++) {
            let val = this.board[i]
            let col = i % 3
            let row = Math.floor(i / 3)
            let x = col * 200
            let y = row * 200

            if (val === 1) {
                ctx.strokeStyle = '#FF0000'
                ctx.lineWidth = 15
                ctx.beginPath()
                ctx.moveTo(x + 50, y + 50)
                ctx.lineTo(x + 150, y + 150)
                ctx.moveTo(x + 150, y + 50)
                ctx.lineTo(x + 50, y + 150)
                ctx.stroke()
            } else if (val === 2) {
                ctx.strokeStyle = '#0000FF'
                ctx.lineWidth = 15
                ctx.beginPath()
                ctx.arc(x + 100, y + 100, 55, 0, Math.PI * 2)
                ctx.stroke()
            } else {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
                ctx.font = 'bold 50px Arial'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillText(i + 1, x + 100, y + 100)
            }
        }

        if (this.winner) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
            ctx.fillRect(0, 250, width, 100)
            
            ctx.font = 'bold 60px Arial'
            ctx.fillStyle = '#00FF00'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.shadowColor = '#000'
            ctx.shadowBlur = 10
            
            let winText = this.winner === this.playerX ? 'PLAYER X WON!' : 'PLAYER O WON!'
            ctx.fillText(winText, width / 2, 300)
        } else if (this.isDraw) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
            ctx.fillRect(0, 250, width, 100)
            
            ctx.font = 'bold 60px Arial'
            ctx.fillStyle = '#FFFF00'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.shadowColor = '#000'
            ctx.shadowBlur = 10
            ctx.fillText('DRAW GAME!', width / 2, 300)
        }

        return canvas.toBuffer('image/png')
    }

    move(index, player) {
        if (this.winner || this.isDraw) return false
        if (index < 0 || index > 8) return false
        if (this.board[index] !== 0) return false
        if (player !== this.turn) return false

        this.board[index] = player === this.playerX ? 1 : 2
        this.checkWin()
        
        if (!this.winner && !this.isDraw) {
            this.turn = this.turn === this.playerX ? this.playerO : this.playerX
        }
        return true
    }

    checkWin() {
        const wins = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        for (let combo of wins) {
            let [a, b, c] = combo
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.winner = this.board[a] === 1 ? this.playerX : this.playerO
                return
            }
        }

        if (!this.board.includes(0)) this.isDraw = true
    }
}

module.exports = TicTacToe