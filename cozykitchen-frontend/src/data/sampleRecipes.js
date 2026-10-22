const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`

// Même structure que le modèle Recette du cahier des charges
export const sampleRecipes = [
  {
    _id: '1', titre: 'Pâtes tomate et basilic', categorie: 'Plat',
    description: 'Un classique réconfortant, prêt en 25 minutes, avec une sauce tomate maison parfumée au basilic.',
    image: img('photo-1473093295043-cdd812d0e601'), tempsPreparation: 25,
    ingredients: [
      { nom: 'Spaghetti', quantite: '300 g' }, { nom: 'Tomates pelées', quantite: '400 g' },
      { nom: 'Ail', quantite: '2 gousses' }, { nom: 'Basilic frais', quantite: '1 poignée' },
      { nom: "Huile d'olive", quantite: '3 c. à soupe' },
    ],
    etapes: [
      "Faites cuire les pâtes dans l'eau bouillante salée.",
      "Faites dorer l'ail dans l'huile d'olive, puis ajoutez les tomates.",
      'Laissez mijoter 15 minutes à feu doux.',
      'Mélangez les pâtes à la sauce et ajoutez le basilic.',
    ],
  },
  {
    _id: '2', titre: 'Shakshouka', categorie: 'Plat',
    description: 'Des œufs pochés dans une sauce de tomates et de poivrons relevée aux épices.',
    image: img('photo-1590412200988-a436970781fa'), tempsPreparation: 30,
    ingredients: [
      { nom: 'Œufs', quantite: '4' }, { nom: 'Tomates', quantite: '500 g' },
      { nom: 'Poivron rouge', quantite: '1' }, { nom: 'Oignon', quantite: '1' },
      { nom: 'Cumin et paprika', quantite: '1 c. à café de chaque' },
    ],
    etapes: [
      "Faites revenir l'oignon et le poivron coupés en dés.",
      'Ajoutez les tomates et les épices, puis laissez réduire 15 minutes.',
      'Creusez 4 puits et cassez un œuf dans chacun.',
      'Couvrez et laissez cuire 5 minutes. Servez avec du pain.',
    ],
  },
  {
    _id: '3', titre: 'Pancakes moelleux', categorie: 'Petit-déjeuner',
    description: 'Des pancakes épais et dorés, à garnir de fruits ou de miel.',
    image: img('photo-1567620905732-2d1ec7ab7445'), tempsPreparation: 20,
    ingredients: [
      { nom: 'Farine', quantite: '200 g' }, { nom: 'Lait', quantite: '25 cl' },
      { nom: 'Œufs', quantite: '2' }, { nom: 'Sucre', quantite: '2 c. à soupe' },
      { nom: 'Levure chimique', quantite: '1 sachet' },
    ],
    etapes: [
      'Mélangez la farine, le sucre et la levure.',
      "Ajoutez le lait et les œufs, puis fouettez jusqu'à obtenir une pâte lisse.",
      'Faites cuire des petites louches dans une poêle chaude, 2 minutes par face.',
    ],
  },
  {
    _id: '4', titre: 'Salade fraîcheur', categorie: 'Entrée',
    description: 'Une salade croquante de légumes de saison avec une vinaigrette au citron.',
    image: img('photo-1546069901-ba9599a7e63c'), tempsPreparation: 10,
    ingredients: [
      { nom: 'Concombre', quantite: '1' }, { nom: 'Tomates cerises', quantite: '200 g' },
      { nom: 'Feta', quantite: '100 g' }, { nom: 'Citron', quantite: '1' },
      { nom: "Huile d'olive", quantite: '2 c. à soupe' },
    ],
    etapes: [
      'Coupez le concombre et les tomates.',
      'Émiettez la feta par-dessus.',
      "Mélangez le jus de citron et l'huile, puis versez sur la salade.",
    ],
  },
  {
    _id: '5', titre: 'Pizza margherita', categorie: 'Plat',
    description: 'La pizza italienne simple : sauce tomate, mozzarella fondante et basilic.',
    image: img('photo-1565299624946-b28f40a0ae38'), tempsPreparation: 45,
    ingredients: [
      { nom: 'Pâte à pizza', quantite: '1 boule' }, { nom: 'Sauce tomate', quantite: '150 g' },
      { nom: 'Mozzarella', quantite: '125 g' }, { nom: 'Basilic', quantite: 'quelques feuilles' },
    ],
    etapes: [
      'Préchauffez le four à 240 °C.',
      'Étalez la pâte et nappez-la de sauce tomate.',
      'Ajoutez la mozzarella et enfournez 12 minutes.',
      'Parsemez de basilic à la sortie du four.',
    ],
  },
  {
    _id: '6', titre: 'Bol de légumes rôtis', categorie: 'Plat',
    description: 'Un bol complet de légumes rôtis au four, de pois chiches et de graines.',
    image: img('photo-1512621776951-a57141f2eefd'), tempsPreparation: 35,
    ingredients: [
      { nom: 'Patate douce', quantite: '1' }, { nom: 'Pois chiches', quantite: '200 g' },
      { nom: 'Brocoli', quantite: '1 petit' }, { nom: 'Graines de sésame', quantite: '1 c. à soupe' },
    ],
    etapes: [
      'Coupez les légumes en morceaux et déposez-les sur une plaque avec les pois chiches.',
      "Arrosez d'huile, salez et enfournez 25 minutes à 200 °C.",
      'Servez en bol et saupoudrez de sésame.',
    ],
  },
]
