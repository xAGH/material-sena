import mysql2 from "mysql2/promise";

export const pool = mysql2.createPool({
    // Conexión por URI
    uri: process.env.DB_URI || "mysql://root@127.0.0.1:3306",

    /* Conexión por parámetros
    user: "todo",
    database: "todos",
    port: 3306,
    password: "todo_password",
    host: "127.0.0.1", */

    // NOTA: Solo se conecta por alguna de las 2
});
