import prismaClient from '../../prisma';

interface ISkillRequest {
    name: string;
    damage?: number;
    cost: number;
    char_id: string;
}

class CreateSkillService {
    async execute({
        name,
        damage,
        cost,
        char_id,
    }: ISkillRequest) {
        const skill = await prismaClient.skill.create({
            data: {
                name,
                damage,
                cost,
                character_id: char_id,
            },
        });

        return skill;
    }
}

export { CreateSkillService };