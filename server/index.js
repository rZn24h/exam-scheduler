const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
require("dotenv").config(); // Pentru a citi variabilele de mediu

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Inițializare Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

// Endpoint de test
app.get("/api/status", (req, res) => {
  res.send({ status: "Server is running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
