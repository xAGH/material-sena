package base;

abstract class Database {

    abstract void connect();

    abstract void save(String data);

}

class MySQLDatabase extends Database {
    @Override
    public void connect() {
        System.out.println("Conectado a MySQL");
    }

    @Override
    public void save(String data) {
        System.out.println("Guardando en MySQL: " + data);
    }
}

class PostgresDatabase extends Database {
    @Override
    public void connect() {
        System.out.println("Conectado a Postgres");
    }

    @Override
    public void save(String data) {
        System.out.println("Guardando en Postgres: " + data);
    }
}

class UserService {

    private Database database;

    public UserService(Database database) {
        this.database = database;
    }

    public void registerUser(String user) {
        database.connect();
        database.save(user);
    }
}

public class ConDI {
    public static void main(String[] args) {
        PostgresDatabase postgres = new PostgresDatabase();
        MySQLDatabase mysql = new MySQLDatabase();
        UserService service = new UserService(postgres);
        UserService service2 = new UserService(mysql);
        service.registerUser("Alejo");
        service2.registerUser("Alejo");
    }
}
