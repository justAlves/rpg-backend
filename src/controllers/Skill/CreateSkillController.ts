import { Request, Response } from 'express';
import { CreateSkillService } from '../../services/Skill/CreateSkillService';

class CreateSkillController{
    async handle(request: Request, response: Response){
        const { name, damage, cost, char_id } = request.body;

        const createSkillService = new CreateSkillService();

        const skill = await createSkillService.execute({
            name,
            damage,
            cost,
            char_id,
        });

        return response.json(skill);
    }
}

export { CreateSkillController };