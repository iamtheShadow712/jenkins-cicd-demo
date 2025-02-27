const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000

const users = [
    { id: 1, username: "user 1" },
    { id: 2, username: "user 2" }
]

app.use('/api/users', (req, res, next) => {
    res.status(200).json({
        data: users
    })
})

app.use('/', (req, res, next) => {
    res.status(200).json({
        message: "API is working"
    })
})

app.listen(PORT, () => {
    console.log('server is running on port: ', PORT)
})

module.exports = app