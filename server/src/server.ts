import express from 'express'

const app = express()

app.get('/ads', (req, res) => { return res.json([{ id: 1, name: 'apsdo' }]) })

app.listen('3001')