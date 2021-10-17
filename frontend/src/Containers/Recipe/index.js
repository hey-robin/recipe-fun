import React from 'react'
import { connect } from "react-redux"
import { Name, RecipeInstructions, IngredientListItem, Heading } from "./styles"


function Recipe({ recipeDetails }) {
  if (!recipeDetails) return null
  const { name, ingredients, instructions } = recipeDetails
  return <>
    <Name>{name}</Name>
    <Heading>Ingredients</Heading>
    <Ingredients ingredients={ ingredients } />
    <Heading>Instructions</Heading>
    <RecipeInstructions>{instructions}</RecipeInstructions>
  </>
}

function Ingredients({ ingredients }) {
  return <ul>
    {ingredients.map((ingredient) => {
      const { name, unit, amount, _id: id } = ingredient
      return <IngredientListItem key={id}>{amount} {unit} {name}</IngredientListItem>
    })}
  </ul>
}

const mapStateToProps = (state) => {
  const { recipe } = state
  return { ...recipe }
}

export default connect(mapStateToProps)(Recipe)

