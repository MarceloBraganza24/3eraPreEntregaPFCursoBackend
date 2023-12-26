import mongoose from 'mongoose';

const cartsCollection = 'carts';

const cartsSchema = new mongoose.Schema({
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
            quantity: {
                type: Number,
                default: 1
            },
            default: []
        }
    ]       
});

cartsSchema.pre('find', function() {
    this.populate('products');
});

export const cartsModel = mongoose.model(cartsCollection, cartsSchema);
