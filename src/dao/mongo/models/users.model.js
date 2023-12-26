import mongoose from 'mongoose';

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    carts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carts'
    }
});

usersSchema.pre('find', function() {
    this.populate('carts');
});

export const usersModel = mongoose.model(usersCollection, usersSchema);
