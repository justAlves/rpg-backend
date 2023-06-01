import prismaClient from '../../prisma';

interface GetUserRequest{
  id: string
}

class GetUserService{
    async execute({id}: GetUserRequest){
        const user = await prismaClient.user.findFirst({
            where:{
                id
            },
            select: {
                id: true,
                name: true,
                email: true,
                characters: true,
            }
        });

        return {user};
    }
}

export { GetUserService };