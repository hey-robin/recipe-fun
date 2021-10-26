import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../actions"
import Ingredients from './Ingredients'
import { Name, RecipeInstructions, Heading } from "./styles"


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


export default Recipe
