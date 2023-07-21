import prismaClient from '../../prisma';

class GetSkillService {
    async execute(id: string) {
        const skill = await prismaClient.skill.findUnique({
            where: {
                id,
            },
        });

        return skill;
    }
}

export { GetSkillService };