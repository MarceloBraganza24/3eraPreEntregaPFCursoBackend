import ProductsRepository from '../repositories/products.repository.js';

const productsManager = new ProductsRepository();

const getProductsService = async (page) => {
    const products = await productsManager.getAll(page);
    return products;
}

const getProductByIdService = async (id, product) => {
    await productsManager.update(id, product);
    return product;
}

const saveProductService = async (product) => {
    await productsManager.save(product);
    return product;
}

const eliminateProductByIdService = async (id) => {
    const product = await productsManager.eliminate(id);
    return product;
}

export {
    getProductsService,
    getProductByIdService,
    saveProductService,
    eliminateProductByIdService
}