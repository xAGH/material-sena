class MysqlDatabaseSin {
    save(datos: string) {
        // Guarda en la bd
    }
}

class PostgresDatabaseSin {
    save(datos: string) {
        // Guarda en la bd
    }
}

class UserServiceSin {
    database: PostgresDatabase;

    constructor() {
        this.database = new PostgresDatabase();
    }

    guardarUsuario(datos: string) {
        this.database.save(datos);
    }
}

const userServiceSin = new UserServiceSin();
userServiceSin.guardarUsuario("Alejo");
