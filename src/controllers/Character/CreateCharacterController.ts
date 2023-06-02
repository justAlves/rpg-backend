import { Request, Response } from 'express';
import { CreateCharacterService } from '../../services/Character/CreateCharacterService';

class CreateCharacterController{
    async handle(req: Request, res: Response){
        const { name, strength, fight, intelligence, agility, charm, emotion, campaign_id } = req.body;
        const user_id = req.user_id;

        const createCharacterService = new CreateCharacterService();

        const character = await createCharacterService.execute({ name, strength, fight, intelligence, agility, charm, emotion, user_id, campaign_id});

        return res.json(character);
    }
}

export { CreateCharacterController };