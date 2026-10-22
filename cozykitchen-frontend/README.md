# CozyKitchen – Frontend (React + Vite)

    npm install
    npm run dev

Le frontend appelle `GET /api/recettes` (proxy Vite vers http://localhost:5000, voir vite.config.js).
Si le backend est éteint, des recettes d'exemple (src/data/sampleRecipes.js) s'affichent.

Format attendu d'une recette : { _id, titre, description, image, categorie,
ingredients: [{ nom, quantite }], tempsPreparation (minutes), etapes: [string] }
