import prismaClient from '../../prisma';

class DeleteCharService{
    async execute(id: string){
        const char = await prismaClient.character.delete({
            where: {
                id
            }
        });
    
        return char;
    }
}

export { DeleteCharService };