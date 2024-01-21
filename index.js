const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// const AnuragMiddleware = (req,res,next) => {
//     console.log(req)
//     next()
// }

app.use(express.static(path.join(__dirname, "public")))
// app.use(AnuragMiddleware)

app.get('/hello/:name', (req, res) => {
    res.send('Hello World! ' + req.params.name)
})

app.get('/about', (req, res) => {
    // res.send('About Page!')
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.json({"anurag": 21})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})