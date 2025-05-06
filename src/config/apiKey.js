require("dotenv").config();

const apiKeyMiddleware = (req, res, next) => {
    const clientKey = req.headers['.0GkT9E*5l0=_%L5/I;VN0)]KF6+YY'];
    const serverKey = process.env.API_KEY;

    if (!clientKey) {
        return res.status(401).json({error: 'Chave de API não fornecida'});
    }
    if (clientKey !== serverKey) {
        return res.status(403).json({error: 'Chave de API incorreta! Sem acesso autorizado!'});
    }
    
    next(); 
};

module.exports = apiKeyMiddleware;