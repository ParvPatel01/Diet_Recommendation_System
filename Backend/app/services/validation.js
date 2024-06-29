const zod = require("zod")

const userLoginValidation = zod.object({
    username: zod.string(),
    password: zod.string().min(6)

})

const userRegisterValidation = zod.object({
    email: zod.string().email(),
    username: zod.string(),
    password: zod.string().min(6)

})

module.exports = {
    userLoginValidation,
    userRegisterValidation
}