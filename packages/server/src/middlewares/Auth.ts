import { RequestHandler } from "express";
import { Unauthorized } from "../utils/errors/Unauthorized";
import JwtToken from "../utils/jwtToken";
import { Middleware } from "./Middleware";

export default class AuthMiddleware extends Middleware {
    
    public static Jwt: RequestHandler = (req, _res, next) =>  {
        const jwtToken = new JwtToken();
        
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) return next(new Unauthorized("token not found"));

        try {
            const payload = jwtToken.verify(token);
        
            req.params.userId = payload.id;

            next();
        } catch (error) {
            next(new Unauthorized("invalid token"));
        }
    }
    

}