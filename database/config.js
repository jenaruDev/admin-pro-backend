const mongoose = require("mongoose");
require("dotenv").config();

const dbConnectionString = process.env.DB_CNN;

const dbConnection = async () => {
  try {
    await mongoose.connect(dbConnectionString);

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la Base de Datos");
  }
};

module.exports = {
  dbConnection,
};
