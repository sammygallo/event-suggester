require("dotenv").config();
module.exports = {
  development: {
    username: "postgres",
    password: "password",
    database: "event_suggester",
    host: "localhost",
    dialect: "postgres",
    protocol: "postgres",
    port: "5432",
  },
};
