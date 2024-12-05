// Import de la bibliotheque express
const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
// le port
const port = 3002;

connectDB();

// assignation a la variable
const app = express();

// utilisation de s middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use("/post", require("./routes/route.post"));
app.use("/post", require("./routes/postRoute"));

// lancer le serveur
app.listen(port, () => {
  console.log("====================================");
  console.log(`le server a demarré sur le port: ${port}`);
  console.log("====================================");
});
