import prismaClient from '../../prisma';

interface UserCharRequest{
  user_id: string,
  campaign_id?: string
}

class GetUserCharService{
    async execute({user_id, campaign_id}: UserCharRequest){

        const character = await prismaClient.character.findMany({
            where:{
                user_id,
                campaign_id
            }
        });

        return { character };
    }
}

export { GetUserCharService };