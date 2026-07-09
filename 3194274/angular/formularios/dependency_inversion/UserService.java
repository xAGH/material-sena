package dependency_inversion;

interface Database {
  public void save(String user);
}

@Service
class MysqlDatabase implements Database {
  public void save(String user) {
    // Guarda user en mysql
  }
}

class PostgresDatabase implements Database {
  public void save(String user) {
    // Guarda user en mysql
  }
}

class RedisDatabase implements Database {
  public void save(String user) {
    // Guarda user en mysql
  }
}

public class UserService {

  @Autowired
  MysqlDatabase mysql;

  UserService(Database database) {
    this.database = database;
  }

  public void saveUser(String user) {
    this.database.save(user);
  }

}

class Main {

  public static void main(String[] args) {
    MysqlDatabase mysql = new MysqlDatabase();
    PostgresDatabase postgres = new PostgresDatabase();
    RedisDatabase redis = new RedisDatabase();

    UserService service = new UserService(redis);
  }

}
