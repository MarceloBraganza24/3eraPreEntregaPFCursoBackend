import CartsRepository from '../repositories/carts.repository.js';

const cartsManager = new CartsRepository();

const getCartByIdService = async (id) => {
    const cart = await cartsManager.getCart(id);
    return cart;
}

const getCartsService = async () => {
    const carts = await cartsManager.getAll();
    return carts;
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

export {
    getCartByIdService,
    getCartsService,
    saveCartService,
    updateCartByIdService,
    eliminateCartByIdService
}