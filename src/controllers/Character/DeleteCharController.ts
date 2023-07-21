import { Request, Response } from 'express';
import { DeleteCharService } from '../../services/Character/DeleteCharService';

class DeleteCharController{
    async handle(request: Request, response: Response){
        const id  = request.query.id as string;

        const deleteCharService = new DeleteCharService();

        const char = await deleteCharService.execute(id);

        return response.json(char);
    }
}

export { DeleteCharController };