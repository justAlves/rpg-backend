import prismaClient from '../../prisma';

class GetAllSkillService {
    async execute(char_id: string) {
        const skill = await prismaClient.skill.findMany({
            where: {
                character_id: char_id,
            },
        });

        return skill;
    }
}

export { GetAllSkillService };