import { Request, Response } from 'express';
import { GetSkillService } from '../../services/Skill/GetSkillService';

class GetSkillController{
    async handle(request: Request, response: Response){
        const id  = request.query.id as string;

        const getSkillService = new GetSkillService();

        const skill = await getSkillService.execute(id);

        return response.json(skill);
    }
}

export { GetSkillController };