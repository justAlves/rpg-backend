import prismaClient from '../../prisma';

interface CampaignRequest{
  name: string
}

class CreateCampaignService{
    async execute({name}: CampaignRequest){
        const campaign = await prismaClient.campaign.create({
            data:{
                name
            }
        });

        return { campaign };
    }
}

export { CreateCampaignService };