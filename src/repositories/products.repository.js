//import ProductsDao from '../dao/mongo/classes/products.dao.js';
import { Products } from '../dao/factory.js';

export default class ProductsRepository {
    constructor() {
        this.dao = new Products();
    }
    getAll = async (page) => {
        const result = await this.dao.getAll(page);
        return result;
    }
    save = async (product) => {
        const result = await this.dao.save(product);
        return result;
    }
    update = async (id, product) => {
        const result = await this.dao.update(id, product);
        return result;
    }
    eliminate = async (id) => {
        const result = await this.dao.eliminate(id);
        return result;
    }
}