import { config } from 'dotenv'
config()
import express from 'express'
import path from 'path'


//CREATE AN EXPRESS APP
const app = express()
const port = +process.env.PORT || 4000

//MIDDLEWARE
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
}) 

app.get('^/$|/Home', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})