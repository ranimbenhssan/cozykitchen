import { useEffect, useMemo, useState } from 'react'
import { fetchRecipes } from '../api.js'
import SearchBar from '../components/SearchBar.jsx'
import RecipeCard from '../components/RecipeCard.jsx'
import RecipeDetail from '../components/RecipeDetail.jsx'

// Retire les accents et la casse pour une recherche plus tolérante
const normalize = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export default function Recipes() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [offline, setOffline] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetchRecipes().then(({ recipes, offline }) => {
      setRecipes(recipes); setOffline(offline); setLoading(false)
    })
  }, [])

  const results = useMemo(
    () => recipes.filter((r) => normalize(r.titre).includes(normalize(query.trim()))),
    [recipes, query]
  )

  return (
    <section className="container recipes">
      <h1>Nos recettes</h1>
      <SearchBar value={query} onChange={setQuery} />
      {offline && <p className="notice">Le serveur ne répond pas : des recettes d'exemple sont affichées.</p>}

      {loading ? (
        <p className="state">Chargement des recettes…</p>
      ) : results.length === 0 ? (
        <p className="state">Aucune recette ne correspond à « {query} ». Essayez un autre nom de plat.</p>
      ) : (
        <div className="grid">
          {results.map((r) => <RecipeCard key={r._id} recipe={r} onOpen={setSelected} />)}
        </div>
      )}

      {selected && <RecipeDetail recipe={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
