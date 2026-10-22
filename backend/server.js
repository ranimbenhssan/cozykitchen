
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Modèle d'une recette dans MongoDB
const recetteSchema = new mongoose.Schema({
  _id: String,
  titre: { type: String, required: true },
  categorie: String,
  description: String,
  image: String,
  tempsPreparation: Number,
  ingredients: [
    {
      nom: String,
      quantite: String,
    },
  ],
  etapes: [String],
});

const Recette = mongoose.model("Recette", recetteSchema);

// Vérifier que le serveur fonctionne
app.get("/", (req, res) => {
  res.send("Bienvenue sur le backend de CozyKitchen !");
});

// Récupérer toutes les recettes depuis MongoDB
app.get("/api/recettes", async (req, res) => {
  try {
    const recettes = await Recette.find();
    res.json(recettes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération des recettes" });
  }
});

// Récupérer une recette par son identifiant
app.get("/api/recettes/:id", async (req, res) => {
  try {
    const recette = await Recette.findById(req.params.id);

    if (!recette) {
      return res.status(404).json({ message: "Recette introuvable" });
    }

    res.json(recette);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération de la recette" });
  }
});

// Connecter MongoDB avant de démarrer Express
async function demarrerServeur() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connecté avec succès !");

    app.listen(PORT, () => {
      console.log(`Backend lancé sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erreur de connexion à MongoDB :", error.message);
  }
}

demarrerServeur();
