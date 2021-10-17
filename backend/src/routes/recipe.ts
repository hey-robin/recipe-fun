import { Request, Response, NextFunction } from "express"
import { RecipeModel } from "../models"

export const recipeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { _id, name, ingredients, instructions} = await RecipeModel.findById(req.params.id)
    const normalizedRecipe = {
      id: _id,
      name,
      ingredients,
      instructions,
    }
    res.send(normalizedRecipe);
  } catch(err) {
    next(new Error(`Could not find recipe with id: ${req.params.id}`))
  }
}
