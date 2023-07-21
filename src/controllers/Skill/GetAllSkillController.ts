import { Request, Response } from 'express';
import { GetAllSkillService } from '../../services/Skill/GetAllSkillService';

class GetAllSkillController{
    async handle(request: Request, response: Response){
        const char_id  = request.query.char_id as string;

        const getAllSkillService = new GetAllSkillService();

        const skill = await getAllSkillService.execute(char_id);

        return response.json(skill);
    }
}

export { GetAllSkillController };