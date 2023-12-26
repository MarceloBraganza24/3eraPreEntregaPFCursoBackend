import { ticketsModel } from '../models/tickets.model.js'

export default class TicketsDao {
    getById = async(id) => {
        const ticket = await ticketsModel.findById(id).lean();
        return ticket;
    }

    save = async(ticket) => {
        const result = await ticketsModel.create(ticket);
        return result;
    }
}