import * as ticketsService from '../services/tickets.service.js';

const get = async (req, res) => {
    try {
        const { tid } = req.params;
        const ticket = await ticketsService.getTicketService(tid);
        res.send(ticket);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export {
    get
}