const { validateToken } = require("../services/token_service");

const authMiddleWare = (req, res, next) => {

    const authorizationToken = req.headers.authorization;

    if (!authorizationToken || !authorizationToken.startsWith("Bearer")) {
        res.json({
            message: "Unauthenticated"
        })
        return;
    }

    const token = authorizationToken.split(" ")[1];
    console.log("token :",token)

    try {
        const payload = validateToken(token);
        if (!payload) {
            return res.json({
                message: "User does not exist"
            })
        }

        req.userId = payload._id;

        next();
    } catch (error) {
        res.json(
            {
                message: error.message
            }
        )
        return;
    }


}

module.exports = {
    authMiddleWare
}