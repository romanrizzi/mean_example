import express from 'express'
import bodyParserFactory from 'body-parser'
import mongoose from 'mongoose'
import router from './routes/routes.js'

const app = express()
mongoose.connect('mongodb://localhost/news')

app.use(bodyParserFactory.json())
app.use(router)

const port = 3001
app.listen(port, () => console.log(`Server running on ${port}`))
