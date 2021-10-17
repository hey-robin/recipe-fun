import { Request, Response, NextFunction } from "express"

export const recipeMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // TODO fetch and return a recipe
}
