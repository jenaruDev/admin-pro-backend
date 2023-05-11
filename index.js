require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { dbConnection } = require("./database/config");

//Crear el servidor Express
const app = express();
const port = process.env.PORT;

//Configurar CORS
app.use(cors());

//DB Connection
dbConnection();

//console.log(process.env);

//Levantamos
app.listen(port, () => {
  console.log("Servidor corriendo en puerto:  ", port);
});

//Rutas

app.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: "Hola Mundo",
  });
});
