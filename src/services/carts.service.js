import ProductsRepository from '../repositories/products.repository.js';
import CartsRepository from '../repositories/carts.repository.js';
import * as ticketsService from '../services/tickets.service.js';
import mongoose from 'mongoose';

const cartsManager = new CartsRepository();
const productsManager = new ProductsRepository();

const getCartByIdService = async (id) => {
    const cart = await cartsManager.getCart(id);
    return cart;
}

const getCartsService = async () => {
    const carts = await cartsManager.getAll();
    return carts;
}

const getPurchaser = async (jwtPurchaser) => {
    const partsUserJWT = jwtPurchaser.split('.');
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

const saveCartService = async (cart) => {
    await cartsManager.save(cart);
    return cart;
}

const updateCartByIdService = async (cid, cart) => {
    await cartsManager.update(cid, cart);
    return cart;
}

const eliminateCartByIdService = async (id) => {
    const cart = await cartsManager.eliminate(id);
    return cart;
}

let amount = 0;
const outStock = [];

const purchase = async (cid, purchaser) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();

        const cart = await cartsManager.getCart(cid);
        cart.products.forEach(async ({ product, quantity }) => {
            if(product.stock >= quantity) {
                amount += product.price * quantity;
                product.stock -= quantity;
                await productsManager.update(product._id, product)
            } else {
                outStock.push({ product, quantity });
            }
        })
        await ticketsService.createTicket(purchaser, amount);
        await cartsManager.update(cid, outStock);

        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
    } finally {
        session.endSession();
    }
    
}

export {
    getCartByIdService,
    getCartsService,
    getPurchaser,
    saveCartService,
    updateCartByIdService,
    eliminateCartByIdService,
    purchase
}