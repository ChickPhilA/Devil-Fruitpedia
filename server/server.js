import express from 'express'
const app = express()

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
    res.status(200).send("<h1> Success!! </h1>")
})

app.listen(3000, () => {
    console.log("Server now running on Port 3000! Yippee!!!")
})