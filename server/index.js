const express  = require('express')
const app = express()
const helmet = require('helmet')
const router = require('./routes/controller.js')
const port = 2929

app.use(helmet())
app.use('/', router)


app.listen(port, () =>{
    console.log(`Listening to port ${port}`)
})