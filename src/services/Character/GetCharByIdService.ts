import prismaClient from '../../prisma';

interface CharByIdRequest{
  id: string
}

class GetCharByIdService{
    async execute({ id }: CharByIdRequest){
        const character = await prismaClient.character.findFirst({
            where:{
                id
            }
        });

        return { character };
    }
}

export { GetCharByIdService };