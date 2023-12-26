import {productsModel} from '../models/products.model.js'

export default class ProductsDao {
    getAll = async (page) => {
        const products = await productsModel.paginate({}, {limit: 5, page, lean: true});
        return products; 
    }
    save = async (product) => {
        const result = await productsModel.create(product);
        return result;
    }
    update = async (id, product) => {
        const result = await productsModel.findByIdAndUpdate(id, product);
        return result;
    }
    eliminate = async (id) => {
        const result = await productsModel.findByIdAndDelete(id);
        return result;
    }
}