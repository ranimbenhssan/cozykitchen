import { useEffect, useRef } from 'react'
import RecipeImage from './RecipeImage.jsx'

export default function RecipeDetail({ recipe, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="overlay" onClick={onClose}>
      <aside className="drawer" role="dialog" aria-modal="true" aria-label={recipe.titre} onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="drawer__close" onClick={onClose}>Fermer</button>
        <RecipeImage className="drawer__img" src={recipe.image} title={recipe.titre} />
        <div className="drawer__content">
          <span className="badge">{recipe.categorie}</span>
          <h2>{recipe.titre}</h2>
          <p className="drawer__time">Temps de préparation : <strong>{recipe.tempsPreparation} min</strong></p>
          <p>{recipe.description}</p>

          <h3>Ingrédients</h3>
          <ul className="ingredients">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}><span>{ing.nom}</span><span className="qty">{ing.quantite}</span></li>
            ))}
          </ul>

          <h3>Préparation</h3>
          <ol className="steps">
            {recipe.etapes.map((etape, i) => <li key={i}>{etape}</li>)}
          </ol>
        </div>
      </aside>
    </div>
  )
}
