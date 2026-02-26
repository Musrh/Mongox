const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔹 Test connexion MongoDB
// Remplace par ta variable Railway MONGO_URL quand tu es prêt
// const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/testdb";
// mongoose.connect(mongoURL)
//   .then(() => console.log("MongoDB connecté"))
//   .catch(err => console.log("Erreur MongoDB :", err));

// 🔹 Routes
app.get("/", (req, res) => {
  res.send("🚀 Server Railway minimal fonctionne !");
});

// Exemple route /users pour test futur MongoDB
app.get("/users", (req, res) => {
  res.json([]);
});

// PORT dynamique fourni par Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Serveur lancé sur le port", PORT);
});
