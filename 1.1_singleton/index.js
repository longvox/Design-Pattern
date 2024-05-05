const DatabaseConnection = require("./databaseConnection");

(function main() {
  // Get database connection instance
  const dbConnection1 = DatabaseConnection.getInstance();
  const dbConnection2 = DatabaseConnection.getInstance();

  // Check if both instances are the same
  console.log("Are both instances the same?", dbConnection1 === dbConnection2); // Output: true

  // Execute a query using one of the instances
  dbConnection1.query("SELECT * FROM users");
})();
