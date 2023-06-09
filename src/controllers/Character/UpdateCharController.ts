import { Request, Response } from 'express';
import { UpdateCharService } from '../../services/Character/UpdateCharService';

class UpdateCharController{
    async handle(req: Request, res: Response){
        const id = req.query.id as string;
        const { maxLife, maxSanity, currentLife, currentSanity } = req.body;

        const updateCharService = new UpdateCharService();

        const character = await updateCharService.execute({ id, maxLife, maxSanity, currentLife, currentSanity });

        return res.json(character);
    }
}

export { UpdateCharController };