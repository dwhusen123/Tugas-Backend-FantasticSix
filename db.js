import mysql from "mysql2/promise"
import "dotenv/config"
const db = mysql.createPool ({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})
async function connection() {
    try {
        await db.getConnection();
        console.log("koneksi database berhasil");
    } catch (error) {
        console.log("koneksi database tidak berhasi;");
    }
}

async function query() {
    try {
        const[value]=await db.query(comand, values ?? []);
        return value;
    } catch (error) {
        console.log(error);
    }
}

export {connection, query};