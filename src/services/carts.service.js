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

export {
    getCartByIdService,
    getCartsService,
    saveCartService
}