import { Request, Response, NextFunction } from "express"
import { RecipeModel } from "../models"

export const recipeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const recipe = await RecipeModel.findById(req.params.id)
    res.send(recipe)
  } catch(err) {
    next(new Error(`Could not find recipe with id: ${req.params.id}`))
  }
}
