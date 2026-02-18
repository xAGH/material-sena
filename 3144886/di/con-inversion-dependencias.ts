abstract class Database {
    abstract save(datos: string): void;
}

class MysqlDatabase extends Database {
    save(datos: string) {
        // Guarda en la bd
    }
}

class PostgresDatabase extends Database {
    save(datos: string) {
        // Guarda en la bd
    }
}

class OracleDatabase extends Database {
    save(datos: string) {
        // Guarda en la bd
    }
}

class UserService {
    database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    guardarUsuario(datos: string) {
        this.database.save(datos);
    }
}

const mysql = new MysqlDatabase();
const postgres = new PostgresDatabase();
const oracle = new OracleDatabase();

const userService = new UserService(oracle);
