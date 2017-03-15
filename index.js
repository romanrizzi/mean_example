import express from 'express'

const port = 3001
express().listen(port, () => console.log(`Server running on ${port}`))
