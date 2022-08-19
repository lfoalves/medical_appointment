import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user.usecase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const data = request.body;
      console.log('\n\t',{data})

      const useCase = new CreateUserUseCase();

      const result = await useCase.execute(data);

      return response.json(result);
    } catch (err: any) {
      console.error(err)
      return response.status(400).json(err.message)
    }
  }
}