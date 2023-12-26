import ProductsRepository from '../repositories/products.repository.js';

const productsManager = new ProductsRepository();

const getProductsService = async (page) => {
    const products = await productsManager.getAll(page);
    return products;
}

const saveProductService = async (product) => {
    await productsManager.save(product);
    return product;
}

export {
    getProductsService,
    saveProductService
}