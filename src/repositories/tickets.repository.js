import { Tickets } from '../dao/factory.js';

export default class TicketsRepository {
    constructor() {
        this.dao = new Tickets();
    }
    getById = async (id) => {
        const result = await this.dao.getById(id);
        return result;
    }
    save = async (ticket) => {
        const result = await this.dao.save(ticket);
        return result;
    }
}