import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const port = 4000
const date = new Date().toLocaleDateString()
const actualTime = new Date().toLocaleTimeString()

app.get('/ping', (_req, res) => {
  console.log(`Server Access on ${date} ${actualTime}`)
  res.send(`Server running on port ${port}`)
})

app.use('/api/diaries', diaryRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
