package inversion_dependencias;

interface Database {
  public void save(String data);
}

class MysqlDatabase implements Database {

  @Override
  public void save(String data) {
  }

}

class PostgresDatabase implements Database {

  @Override
  public void save(String data) {
  }

}

class RedisDatabase implements Database {

  @Override
  public void save(String data) {
  }

}

public class UserService {

  private Database database;

  UserService(Database database) {
    this.database = database;
  }

  void saveUser() {
    this.database.save("Alejo");
  }

}

class Main {
  public static void main(String[] args) {
    MysqlDatabase mysql = new MysqlDatabase();
    PostgresDatabase postgres = new PostgresDatabase();
    RedisDatabase redis = new RedisDatabase();

    UserService user = new UserService(redis);
  }
}
