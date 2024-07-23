const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express()
const port = process.env.PORT || 4000

//app.get or app.post or app.put or app.delete(path, handler)

app.get('/', (req, res) => {
  res.send('Hello Everyone ')
})

app.use(express.json()); // middleware to parse json data

app.post('/post',(req,res) => { // handles post requests in '/post' path
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})