const {
    setError,
    CustomException
} = require('../controllers/response-handler.js');
const
    UserModel = require('../models/user');
const {
    userLoginValidation,
    userRegisterValidation,
} = require('./validation.js');


const findUser = async ({
    username,
    password
}) => {

    const isValidUser = userLoginValidation.safeParse({
        username,
        password
    });
    console.log("1", isValidUser.success)

    if (!isValidUser.success) {
        CustomException("Username and password are required for login.", 400)
    }

    console.log(username, password)
    const user = await UserModel.matchPassword(username, password);

    console.log("find User:", user)
    return user ? user : null
}

const createUser = async (user) => {
    const {
        username,
        email
    } = user
    const isValidUser = userRegisterValidation.safeParse(user);
    console.log("2", isValidUser.success)
    if (!isValidUser.success) {
        CustomException("All Fields are required for Registration.", 400)
    }

    const existingUser = await UserModel.findOne({
        username,
        email
    });

    if (existingUser) {
        CustomException("User Already exist please try to login", 400)
    }
    console.log("user:", user)
    const User = await UserModel.create(user);

    return User;


}

const updateUserProfile = async (user) => {
    console.log(user)
    // const userFind =await UserModel.findOne({ _id: user.userId})
    const updatedUser = await UserModel.updateOne({
        _id: user.userId
    }, {
        profile: {
            ...user
        }
    })

    if(updatedUser.acknowledged){
        return {
            id: user.userId,
            message: "User updated Successfully"
        }
    }else{
        CustomException("Please try after some time", 400)
    }
    console.log(updatedUser)

    return updatedUser;

}

module.exports = {
    findUser,
    createUser,
    updateUserProfile
}