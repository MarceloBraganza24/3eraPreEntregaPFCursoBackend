import * as cartsService from '../services/carts.service.js';

const getAll = async (req, res) => {
    try {
        const carts = await cartsService.getCartsService();
        res.send(carts);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

const save = async (req, res) => {
    try {
        const { products } = req.body;
        if(!products) {
            return res.status(400).send('incomplete values');
        }
        const result = await cartsService.saveCartService({ products });
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

/* const finalizePurchase = async (req, res) => {
    try {
        const { cid } = req.params;
        const cart = await cartsService.getCartByIdService(cid);
        res.send(cart)
        //console.log(cart)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
} */

export {
    getAll,
    save,
    //finalizePurchase
}