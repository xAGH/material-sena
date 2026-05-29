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

public class UserServiceConDI {

  MysqlRepository repository;

  UserServiceConDI(MysqlRepository repo) {
    this.repository = repo;
  }

  public void saveUser() {
    this.repository.save("Alejo");
  }

}
