const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())


app.get('/', (req, res)=>{
  return res.json([
    { name: 'matheus' },
    { name: 'marcao' }
  ])
})







app.listen('3333',()=> console.log('server iniciado'))