import prismaClient from '../../prisma';

interface UpdateRequest{
  id: string,
  maxLife?: number,
  maxSanity?: number,
  currentLife?: number,
  currentSanity?: number
}

class UpdateCharService{
    async execute({id, maxLife, maxSanity, currentLife, currentSanity}: UpdateRequest){

        const character = await prismaClient.character.update({
            where:{
                id,
            },
            data:{
                maxLife,
                maxSanity,
                currentLife,
                currentSanity
            }
        });


        return { character };
    }
}

export { UpdateCharService };