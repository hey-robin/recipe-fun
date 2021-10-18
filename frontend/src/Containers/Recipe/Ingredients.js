import React from 'react'
import { IngredientListItem } from "./styles"


function Ingredients({ ingredients }) {
  return <ul>
    {ingredients.map((ingredient) => {
      const { name, unit, amount, _id: id } = ingredient
      return <IngredientListItem key={id}>{amount} {unit} {name}</IngredientListItem>
    })}
  </ul>
}

export default Ingredients