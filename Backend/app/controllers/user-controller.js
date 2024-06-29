const {
    setResponse,
    setError
} = require('./response-handler.js');
const UserService = require('../services/user-service.js');
const jwt = require("jsonwebtoken");
const { createTokenForUser } = require('../services/token_service.js');

const login = async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;
        const user = await UserService.findUser({
            username,
            password
        });

        if (user) {
            const userId = user._id.toString()

         const token = createTokenForUser(user);
            return setResponse(res, {
                success: true,
                user,
                token
            })

        } 
    } catch (error) {
        return setError(res, error);
    }
}

const register = async (req, res) => {
    try {
        const params = {
            ...req.body
        };
        const User = await UserService.createUser(params);
        return setResponse(res, User);

    } catch (error) {
        return setError(res, error);

    }
}


const updateProfile = async (req,res)=>{
    try {
        const params = {
            ...req.body,
            userId: req.userId
        };
        const User = await UserService.updateUserProfile(params);
        return setResponse(res, User);
    } catch (error) {
        return setError(res, error);
    }
}

module.exports = {
    login,
    register,
    updateProfile
}