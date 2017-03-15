import express from 'express'
import bodyParserFactory from 'body-parser'

const port = 3001
const app = express()
app.use(bodyParserFactory.json())
app.listen(port, () => console.log(`Server running on ${port}`))

let noticias = []

app.get('/noticias', (req, res) => {
  res.json(noticias)
})

app.post('/noticias', (req, res) => {
  const noticia = req.body
  noticias.push(noticia)
  res.sendStatus(200)
})
