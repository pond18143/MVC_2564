const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', require('./router/routes'))

const port = 8080
app.listen(port, () => {
    console.log('Run at port => '+port)
})