import { hash } from 'bcryptjs';
import prismaClient from '../../prisma';

interface UserRequest{
  name: string,
  email: string,
  password: string
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        if(!email || !name || !password){
            throw new Error('Preencha todos os campos!');
        }

        const emailExist = await prismaClient.user.findFirst({
            where: {
                email
            }
        });

        if(emailExist){
            throw new Error('Email já cadastrado no sistema!');
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data:{
                name,
                email,
                password: passwordHash
            },
            select: {
                name: true,
                email: true,
                characters: true,
                created_at: true,
                updated_at: true,
                
            }
        });

        return user;
    }
}

export { CreateUserService };