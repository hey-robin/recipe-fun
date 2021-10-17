import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../actions"
import { Name, RecipeInstructions, IngredientListItem, Heading } from "./styles"


function Recipe() {
  const { id } = useParams();
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (!id) return null;
    dispatch(getRecipeById(id))
  }, [id])

  const { recipeDetails } = useSelector(state => state.recipe)
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

export default Recipe
