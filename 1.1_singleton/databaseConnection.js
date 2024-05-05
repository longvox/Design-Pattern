class DatabaseConnection {
  constructor() {
    // Connect to database
  }

  static getInstance() {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  query(sql) {
    // Execute query
    console.log("Executing query:", sql);
  }
}

module.exports = DatabaseConnection;
