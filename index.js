import express from 'express'
import bodyParserFactory from 'body-parser'
import mongoose from 'mongoose'

const port = 3001
const app = express()
app.use(bodyParserFactory.json())
app.listen(port, () => console.log(`Server running on ${port}`))
mongoose.connect('mongodb://localhost/news')

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  upvotes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
})
const Post = mongoose.model('Post', postSchema)

app.get('/noticias', (req, res, next) => {
  Post.find().then(noticias => res.json(noticias)).catch(next)
})

app.post('/noticias', (req, res, next) => {
  const noticia = new Post(req.body)

  noticia.save().then(noticia => res.sendStatus(200)).catch(next)
})
