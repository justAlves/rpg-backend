import { Request, Response } from 'express';
import { GetUserCharService } from '../../services/Character/GetAllUserCharService';

class GetUserCharController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id;
        const campaign_id  = req.query.campaign_id as string;

        const getUserCharService = new GetUserCharService();

        const character = await getUserCharService.execute({ user_id, campaign_id });

        return res.json(character);
    }
}

export { GetUserCharController };