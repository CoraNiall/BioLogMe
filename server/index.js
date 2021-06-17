const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.json({message: 'Hello World!'})
})

app.get('/view', ( req, res ) => {
    res.send('This route is for User\'s viewing charts of data')
})

app.post('/upload', ( req, res ) => {
    res.json({message: 'This route is for uploading new data'})
})

app.delete('/remove', ( req, res ) => {
  res.send('This route is for deleting data')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})