package dependency_inversion;

class MysqlRepository {
  public void save(String user) {
  }

}

class PostgresRepository {
  public void save(String user) {
  }

}

class OracleRepository {
  public void save(String user) {
  }

}

public class UserServiceSinDI {

  MysqlRepository repository;

  UserServiceSinDI() {
    this.repository = new MysqlRepository();
  }

  public void saveUser() {
    this.repository.save("Alejo");
  }

}
