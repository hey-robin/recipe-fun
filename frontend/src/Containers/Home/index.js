import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { HomeWrapper } from "./styles"
import Input from "@material-ui/core/Input"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { Link, Route } from 'react-router-dom';
import * as actions from "../../actions"
import Recipe from '../Recipe'

const ingredientList = ["flour", "sugar", "salt", "butter", "milk"]

function Home() {
  const [term, setTerm] = React.useState("")
  const [ingredients, setIngredients] = React.useState(["milk"])
  const dispatch = useDispatch();
  const search = useSelector(state => ({ ...state.search }))

  const fetchSearch = () => {
    dispatch(actions.searchRecipes(term, ingredients))
  }

  const handleSearch = (event) => {
    const term = event.target.value
    setTerm(term)
  }

  const handleIngredient = (ingredient, event) => {
    const newIngredients = [ ...ingredients ]
    if (event.target.checked) {
      newIngredients.push(ingredient)
    } else {
      const foundIngredient = newIngredients.indexOf(ingredient)
      newIngredients.splice(foundIngredient, 1)
    }
    setIngredients(newIngredients)
  }

  const { recipes, isLoading } = search
  return (
    <HomeWrapper>
      <Input
        autoFocus={true}
        fullWidth={true}
        onChange={handleSearch}
        value={term}
      />
      <div>
        <h3>Ingredients on hand</h3>
        {ingredientList.map((ingredient) => (
          <FormControlLabel
            key={ingredient}
            control={
              <Checkbox
                checked={ingredients.includes(ingredient)}
                onChange={handleIngredient.bind(this, ingredient)}
                value={ingredient}
              />
            }
            label={ingredient}
          />
        ))}
      </div>
      <Button onClick={fetchSearch}>search</Button>
      <Divider />
      {recipes && (
        <List>
          {recipes.map((recipe) => (
            <ListItem key={recipe.id}>
              <Link to={ `/${recipe.id}` } >
                <ListItemText primary={recipe.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      )}
      {isLoading && <LinearProgress />}
      <Divider />
      <Route path="/:id" component={Recipe} />
    </HomeWrapper>
  )
}

export default Home
