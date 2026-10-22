import { useState } from 'react'

// Affiche l'image de la recette, ou un bloc coloré avec l'initiale si elle ne charge pas
export default function RecipeImage({ src, title, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return <div className={`img-fallback ${className}`} role="img" aria-label={title}>{title?.[0]}</div>
  }
  return <img className={className} src={src} alt={title} loading="lazy" onError={() => setFailed(true)} />
}
