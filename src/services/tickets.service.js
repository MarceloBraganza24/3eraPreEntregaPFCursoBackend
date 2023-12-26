import TicketsRepository from '../repositories/tickets.repository.js';

const ticketsManager = new TicketsRepository();

const getTicketService = async (id) => {
    const ticket = await ticketsManager.getById(id);
    return ticket;
}

const getPurchaser = async (userJWT) => {
    const partsUserJWT = userJWT.split('.');
    const header = partsUserJWT[0];
    const payload = partsUserJWT[1];
    const decodificarBase64 = (dato) => {
        const decoded = atob(dato);
        return JSON.parse(decoded);
    };        
    const decodificadoHeader = decodificarBase64(header);
    const decodificadoPayload = decodificarBase64(payload);
    const purchaser = {
        header: decodificadoHeader,
        payload: decodificadoPayload
    };
    return purchaser.payload.user.email;
}

const createTicket = async (purchaser, cart) => {
    const code = Date.now() + Math.floor(Math.random() * 100000 + 1);

    const currentProducts = cart.products.filter((product) => 
        products.includes(product._id)
    );

    const amount = currentProducts.reduce((acc, prev) => {
        acc += prev.price;
        return acc;
    }, 0);

    const ticket = {
        code,
        purchase_datetime: Date.now(),
        amount,
        purchaser: purchaser
    }
    await ticketsManager.save(ticket);
    return ticket;
}

export {
    getTicketService,
    getPurchaser,
    createTicket
}