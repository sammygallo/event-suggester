require('dotenv').config()
const express = require('express')
const app = express();
app.use(express.json)
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})

