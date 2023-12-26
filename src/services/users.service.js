import UsersRepository from '../repositories/users.repository.js';

const usersManager = new UsersRepository();

const getUserService = async (email) => {
    const user = await usersManager.getByEmail(email);
    return user;
}

const saveUserService = async (user) => {
    await usersManager.save(user);
    return user;
}

export {
    getUserService,
    saveUserService
}