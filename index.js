import express from 'express'

const port = 3001
const app = express()

app.listen(port, () => console.log(`Server running on ${port}`))

app.get('/greet', (req, res) => {
  res.status(200).send(`Hola ${req.query.nombre}`)
})
