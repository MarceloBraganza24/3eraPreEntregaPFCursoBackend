import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import { PRIVATE_KEY_JWT } from './config/constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // Path Absoluto

const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const isValidPassword = (plainPassword, hashedPassword) => bcrypt.compareSync(plainPassword, hashedPassword);

const generateToken = (user) => {
    const token = jwt.sign({ user }, PRIVATE_KEY_JWT, { expiresIn: '24h' });
    return token;
}

const authorization = (role) => {
    return async (req, res, next) => {
        if(req.user.role !== role) return res.status(403).send({ status: 'error', message: 'Not permissions' });
        next();
    }
}

export {
    __dirname,
    createHash,
    isValidPassword,
    generateToken,
    authorization
}
