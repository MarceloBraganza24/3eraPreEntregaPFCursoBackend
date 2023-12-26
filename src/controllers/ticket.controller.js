import * as ticketsService from '../services/tickets.service.js';
import * as cartsService from '../services/carts.service.js';

const get = async (req, res) => {
    try {
        const { tid } = req.params;
        const ticket = await ticketsService.getTicketService(tid);
        res.send(ticket);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const save = async (req, res) => {
    try {
        const { code, amount, purchaser } = req.body;
        if(!code || !amount || !purchaser) return res.status(400).send('incomplete values');
        const ticket = {
            code,
            amount,
            purchaser
        }
        const result = await ticketsService.saveTicketService(ticket);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const finalizePurchase = async (req, res) => {
    try {
        const { cid } = req.params;
        
        const userJWT = req.cookies['TokenJWT'];
        const purchaser = await ticketsService.getPurchaser(userJWT);
        const cart = await cartsService.getCartByIdService(cid);
        const result = await ticketsService.createTicket(purchaser, cart);
        res.status(201).send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export {
    get,
    save,
    finalizePurchase
}