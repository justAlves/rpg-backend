import prismaClient from '../../prisma';

interface CreateCharacterRequest{
  name: string,
  strength: number,
  fight: number,
  intelligence: number,
  agility: number,
  charm: number,
  emotion: number,
  user_id: string,
  campaign_id: string
}

class CreateCharacterService{
    async execute({ name, strength, fight, intelligence, agility, charm, emotion, user_id, campaign_id }: CreateCharacterRequest){

        const character = await prismaClient.character.create({
            data:{
                name,
                strength,
                fight,
                intelligence,
                agility,
                charm,
                emotion,
                user_id,
                campaign_id
            }
        });

        return { character };
    }
}

export { CreateCharacterService };