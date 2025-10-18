class Init {
  static start() {
    const db = new DB();
    const s3 = new S3();
    const main = new Main();
    const mainDi = new MainDI(db, s3);
    main.start();
    mainDi.start();
  }
}

class DB {
  start() {
    console.log('DB inicializada');
  }
}

class S3 {
  start() {
    console.log('S3 inicializado');
  }
}

class Main {
  constructor() {}

  start() {
    const db = new DB();
    const s3 = new S3();
    db.start()
    s3.start()
  }
}

class MainDI {
  private db: DB;
  private s3: S3;

  constructor(db: DB, s3: S3) {
    this.db = db;
    this.s3 = s3;
  }

  start() {
    this.db.start()
    this.s3.start()
  }
}

Init.start();
