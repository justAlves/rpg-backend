import prismaClient from '../../prisma';

class DeleteSkillService {
    async execute(id: string) {
        const skill = await prismaClient.skill.delete({
            where: {
                id,
            },
        });

        return skill;
    }
}

export { DeleteSkillService };