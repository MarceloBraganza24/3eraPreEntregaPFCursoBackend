import { cartsModel } from '../models/carts.model.js'

export default class CartsDao {
    getCart = async (id) => {
        const cart = await cartsModel.findById(id).lean();
        return cart;
    }
    getAll = async () => {
        const carts = await cartsModel.find().lean();
        return carts;
    }
    save = async (cart) => {
        const result = await cartsModel.create(cart);
        return result;
    }
    update = async (id, cart) => {
        const result = await cartsModel.findByIdAndUpdate(id, cart);
        return result;
    }
    eliminate = async (id) => {
        const result = await cartsModel.findByIdAndDelete(id);
        return result;
    }
}