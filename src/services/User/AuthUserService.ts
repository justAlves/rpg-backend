import prismaClient from '../../prisma';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

interface AuthRequest{
  email: string,
  password: string
}

class AuthUserService{
    async execute({email, password}: AuthRequest){
        if(!email || !password){
            throw new Error('Preencha todos os campos!');
        }

        const user = await prismaClient.user.findFirst({
            where: {
                email
            }
        });

        if(!user){
            throw new Error('Email ou Senha invalido(a)');
        }

        const passwordMatch = await compare(password, user.password);
        
        if(!passwordMatch){
            throw new Error('Email ou Senha invalido(a)');
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.SECRET_KEY,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        );

        return {
            id: user.id,
            name: user.name,
            token
        };
    }
}

export  { AuthUserService };