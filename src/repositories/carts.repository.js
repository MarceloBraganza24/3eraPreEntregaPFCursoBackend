//import CartsDao from '../dao/mongo/classes/carts.dao.js';
import { Carts } from '../dao/factory.js';

export default class ProductsRepository {
    constructor() {
        this.dao = new Carts();
    }
    getCart = async (id) => {
        const result = await this.dao.getCart(id);
        return result;
    }
    getAll = async () => {
        const result = await this.dao.getAll();
        return result;
    }
    save = async (cart) => {
        const result = await this.dao.save(cart);
        return result;
    }
}