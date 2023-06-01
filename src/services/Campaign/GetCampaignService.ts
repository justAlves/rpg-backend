import prismaClient from '../../prisma';

class GetCampaignService{
    async execute(){
        const campaign = await prismaClient.campaign.findMany();

        return { campaign };
    }
}

export { GetCampaignService };