
const mongoose = require("mongoose");
require("dotenv").config();

const recettes = require("./data/recettes");

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

async function importerRecettes() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connecté !");

    const nombre = await Recette.countDocuments();

    if (nombre > 0) {
      console.log("La base contient déjà des recettes. Importation annulée.");
      return;
    }

    await Recette.insertMany(recettes);

    console.log(`${recettes.length} recettes importées avec succès !`);
  } catch (error) {
    console.error("Erreur :", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

importerRecettes();
