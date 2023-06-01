import { Request ,Response } from 'express';
import { GetCampaignService } from '../../services/Campaign/GetCampaignService';

class GetCampaignController{
    async handle(req: Request, res: Response){
        const getCampaignService = new GetCampaignService();

        const campaign = await getCampaignService.execute();

        return res.json(campaign); 
    }
}

export { GetCampaignController }; 