import * as productsService from '../services/products.service.js';

const getAll = async (req, res) => {
    try {
        const { page = 1 } = req.query;
        const products = await productsService.getProductsService(page); 
        res.send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const save = async (req, res) => {
    try {
        const { title, description, stock, price, thumbnail, category, code } = req.body;
        if(!title || !description || !stock || !price || !category || !code) {
            return res.status(400).send('incomplete values');
        }
        const result = await productsService.saveProductService({
            title,
            description,
            stock,
            price,
            thumbnail,
            category,
            code
        });
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export {
    getAll,
    save
}