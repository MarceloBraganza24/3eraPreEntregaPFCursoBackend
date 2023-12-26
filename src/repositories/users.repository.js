//import UsersDao from '../dao/mongo/classes/users.dao.js';
import { Users } from '../dao/factory.js';

export default class UsersRepository {
    constructor() {
        this.dao = new Users();
    }
    getByEmail = async (email) => {
        const result = await this.dao.getByEmail(email);
        return result;
    }
    save = async (user) => {
        const result = await this.dao.save(user);
        return result;
    }
}