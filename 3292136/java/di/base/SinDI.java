package base;

class MySQLDatabase {
    public void connect() {
        System.out.println("Conectado a MySQL");
    }

    public void save(String data) {
        System.out.println("Guardando en MySQL: " + data);
    }
}

class PostgresDatabase {
    public void connect() {
        System.out.println("Conectado a Postgres");
    }

    public void save(String data) {
        System.out.println("Guardando en Postgres: " + data);
    }
}

class UserService {

    private PostgresDatabase database;

    public UserService() {
        this.database = new PostgresDatabase();
    }

    public void registerUser(String user) {
        database.connect();
        database.save(user);
    }
}

public class SinDI {
    public static void main(String[] args) {
        UserService service = new UserService();
        service.registerUser("Alejo");
    }
}