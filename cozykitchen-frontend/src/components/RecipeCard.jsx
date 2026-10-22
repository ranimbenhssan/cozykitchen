import RecipeImage from './RecipeImage.jsx'

export default function RecipeCard({ recipe, onOpen }) {
  return (
    <button className="card" onClick={() => onOpen(recipe)} aria-label={`Voir la recette ${recipe.titre}`}>
      <RecipeImage className="card__img" src={recipe.image} title={recipe.titre} />
      <span className="card__body">
        <span className="badge">{recipe.categorie}</span>
        <span className="card__title">{recipe.titre}</span>
        <span className="card__desc">{recipe.description}</span>
        <span className="card__time">{recipe.tempsPreparation} min</span>
      </span>
    </button>
  )
}
