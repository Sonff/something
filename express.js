// express js
// to install express js - 
// npm i express
const express = require('express')
const app = express()
const port = 3000

//app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// http://127.0.0.1:3000/ server name