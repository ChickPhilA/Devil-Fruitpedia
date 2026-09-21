import express from 'express'
const app = express()

app.use('/public', express.static('../client/src/public'))
// app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
    res.status(200).send("<h1> Success!! </h1>")
})

// In Express v5 and up, the wildcard must have a name with it.
app.get('*nothing', (req, res) => {
    res.status(404).send("<h1>Error 404: Route not found</h1>")
})

const PORT =  process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server now running on Port ${PORT}! Yippee!!!`)
    console.log(`Check it out here: http://localhost:${PORT}`)
})