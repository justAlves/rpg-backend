import { Request, Response } from 'express';
import { GetCharByIdService } from '../../services/Character/GetCharByIdService';

class GetCharByIdController{
    async handle(req: Request, res: Response){
        
        const id = req.query.id as string;

        const getCharByIdService = new GetCharByIdService();

        const character = await getCharByIdService.execute({ id });

        return res.json(character);
    }
}

export { GetCharByIdController };