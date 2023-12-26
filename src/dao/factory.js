import config from '../config/config.js';

const persistence = config.persistence;

let Users;
let Products;
let Carts;
let Tickets;

switch(persistence) {
    case 'MONGO':
        console.log('Working with BDD');
        const mongoose = await import('mongoose');
        await mongoose.connect(config.mongoUrl);
        const { default: UsersMongo } = await import('./mongo/classes/users.dao.js');
        Users = UsersMongo;
        const { default: ProductsMongo } = await import('./mongo/classes/products.dao.js');
        Products = ProductsMongo;
        const { default: CartsMongo } = await import('./mongo/classes/carts.dao.js');
        Carts = CartsMongo;
        const { default: TicketsMongo } = await import('./mongo/classes/tickets.dao.js');
        Tickets = TicketsMongo;
        break;
    case 'FILES':
        console.log('Working with FILES');
        const { default: ContactsFiles } = await import('./files/contacts.files.js');
        Contacts = ContactsFiles;
        break;
}

export {
    Users,
    Products,
    Carts,
    Tickets
}