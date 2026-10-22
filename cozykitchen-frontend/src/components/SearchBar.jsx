export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <label htmlFor="search" className="sr-only">Rechercher une recette par son nom</label>
      <input
        id="search" type="search" value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Rechercher une recette, par exemple « pâtes »"
        autoComplete="off"
      />
    </div>
  )
}
