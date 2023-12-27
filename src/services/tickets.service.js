import TicketsRepository from '../repositories/tickets.repository.js';

const ticketsManager = new TicketsRepository();

const getTicketService = async (id) => {
    const ticket = await ticketsManager.getById(id);
    return ticket;
}

const createTicket = async (purchaser, amount) => {
    const code = Date.now() + Math.floor(Math.random() * 100000 + 1);
    const ticket = {
        code,
        purchase_datetime:  new Date().toLocaleString(),
        amount,
        purchaser
    }
    await ticketsManager.save(ticket);
    return ticket;
}

export {
    getTicketService,
    createTicket
}