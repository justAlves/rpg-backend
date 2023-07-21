import { Request, Response } from 'express';
import { DeleteSkillService } from '../../services/Skill/DeleteSkillService';

class DeleteSkillController{
    async handle(request: Request, response: Response){
        const id  = request.query.id as string;

        const deleteSkillService = new DeleteSkillService();

        const skill = await deleteSkillService.execute(id);

        return response.json(skill);
    }
}

export { DeleteSkillController };