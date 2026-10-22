import { sampleRecipes } from './data/sampleRecipes.js'

// Récupère les recettes depuis le backend (GET /api/recettes).
// Si le backend n'est pas lancé, on utilise les données d'exemple pour développer l'interface.
export async function fetchRecipes() {
  try {
    const res = await fetch('/api/recettes')
    if (!res.ok) throw new Error('Réponse invalide')
    const data = await res.json()
    return { recipes: data, offline: false }
  } catch {
    return { recipes: sampleRecipes, offline: true }
  }
}
