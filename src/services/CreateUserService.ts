import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserSerice {

    async execute({ name, email, admin }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error('Email inexistent');
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error('usuário já existente');
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        })

        await usersRepository.save(user)

        return user;
    }
}

export { CreateUserSerice };