import { Request, Response } from 'express';
import { GetCharByCampaignService } from '../../services/Character/GetCharByCampaignService';

class GetCharByCampaignController{
    async handle(req: Request, res: Response){
        const campaign_id = req.query.campaign_id as string;

        const getCharByCampaignService = new GetCharByCampaignService();

        const character = await getCharByCampaignService.execute({ campaign_id });

        return res.json(character);
    }
}

export { GetCharByCampaignController };