abstract class Database {
    abstract void save(String data);
}


class MysqlDatabase extends Database {
    public void save(String data) {
        // Guarda algo que le envien
    }
}

class PostgresDatabase extends Database {
    public void save(String data) {
        // Guarda algo que le envien
    }
}


class RedisDatabase extends Database {
    public void save(String data) {
        // Guarda algo que le envien
    }
}


class UserService {

    Database database;

    UserService(Database database) {
        this.database = database;
    }

    public void save() {
        this.database.save("Alejo");
    }

}

// Inyección de dependencias hace esta parte automática
/* MysqlDatabase mysql = new MysqlDatabase();
PostgresDatabase postgres = new PostgresDatabase();
RedisDatabase redis = new RedisDatabase();

UserService userService = new UserService(mysql); */