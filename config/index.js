import { createPool } from "mysql2"
import 'dotenv/config.js'

let connection = createPool({
    host: process.env.hostDb,
    database: process.env.dbName,
    user: process.env.userDb,
    password: process.env.pwdDb,
    multipleStatements: true,
    connectionLimit: 30
})

connection.on('connection', (pool) => {
    if (!pool) throw new Error('couldnt connect to the database, please try again later')
})


export {
    connection
}