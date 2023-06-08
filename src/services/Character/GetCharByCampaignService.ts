import prismaClient from '../../prisma';

interface CampaignCharRequest{
  campaign_id: string 
}

class GetCharByCampaignService{
    async execute({ campaign_id }: CampaignCharRequest){
        const character = await prismaClient.character.findMany({
            where:{
                campaign_id
            }
        });

        return { character };
    }
}

export { GetCharByCampaignService };