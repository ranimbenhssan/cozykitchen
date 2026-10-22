import { Link } from 'react-router-dom'
import RecipeImage from '../components/RecipeImage.jsx'
import { sampleRecipes } from '../data/sampleRecipes.js'

export default function Home() {
  const [a, b, c] = [sampleRecipes[1], sampleRecipes[2], sampleRecipes[4]]
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <h1>Ce soir, on cuisine quoi ?</h1>
            <p>
              CozyKitchen rassemble des recettes simples au même endroit : cherchez un plat
              par son nom, puis suivez les ingrédients et les étapes.
            </p>
            <Link to="/recettes" className="btn">Voir les recettes</Link>
          </div>
          <div className="collage" aria-hidden="true">
            <RecipeImage className="collage__img collage__img--1" src={a.image} title={a.titre} />
            <RecipeImage className="collage__img collage__img--2" src={b.image} title={b.titre} />
            <RecipeImage className="collage__img collage__img--3" src={c.image} title={c.titre} />
          </div>
        </div>
      </section>

      <section className="container how">
        <h2>Comment ça marche</h2>
        <div className="how__grid">
          <div><h3>Parcourez</h3><p>Découvrez les recettes sous forme de cartes illustrées.</p></div>
          <div><h3>Recherchez</h3><p>Tapez le nom d'un plat pour le retrouver tout de suite.</p></div>
          <div><h3>Cuisinez</h3><p>Ouvrez une recette pour voir les quantités, le temps et les étapes.</p></div>
        </div>
      </section>
    </>
  )
}
