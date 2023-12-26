import passport from "passport";
import jwt from 'passport-jwt';
//import { passportStrategiesEnum } from "./enums.js";
import { PRIVATE_KEY_JWT } from "./constants.js";

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {

    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]), 
        secretOrKey: PRIVATE_KEY_JWT
    }, async (jwt_payload, done) => {
        try {
            return done(null, jwt_payload.user) 
        } catch (error) {
            return done(error);
        }
    }))

};

const cookieExtractor = req => {
    let token = null;
    if(req && req.cookies) {
        token = req.cookies['TokenJWT'];
    }
    return token;
}

export default initializePassport;



/*

    //esta estrategia se usa cuando el backend esta separado el frontend    
    passport.use(passportStrategiesEnum.JWT, new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: PRIVATE_KEY_JWT
    }, async(jwt_payload, done) => {
        try {
            return done(null, jwt_payload.user);
        } catch (error) {
            return done(error);
        }
    }))

    */