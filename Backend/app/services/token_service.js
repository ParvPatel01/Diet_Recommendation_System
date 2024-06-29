const jwt = require("jsonwebtoken");

const createTokenForUser = (user) => {
    const payload = {
        _id: user._id.toString(),
        email: user.email,
        username: user.username
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

    return token;
}

const validateToken = (token) => {

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return payload;

    } catch(e){
        throw new Error(e.message)
    }

}

module.exports = {
    createTokenForUser,
    validateToken
}