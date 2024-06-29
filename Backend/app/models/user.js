const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { createHmac, randomBytes } = require("crypto")
// Define the User Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    salt: {
        type: String
    },
    profile: {
        age: {
            type: Number,
            min: 0
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'non-binary', 'other']
        },
        weight: {
            type: Number,
            min: 0
        },
        height: {
            type: Number,
            min: 0
        },
        dietaryPreferences: {
            type: String
        },
        allergies: {
            type: String
        },
        healthGoals: {
            type: String
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Hash the password before saving the user
userSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    console.log("salt userpre",salt)
    const hashedPassword = createHmac("sha256", salt).update(user.password).digest("hex");

    this.salt = salt;
    this.password = hashedPassword;

    next();

})

userSchema.static("matchPassword",async function (username, password) {
    console.log("username:",username)
    const user = await this.findOne({ username });
    console.log("USEr mathc password:",user)
    if (!user) throw new Error("User not found");

    const salt = user.salt;
    const hashedPassword = user.password;
    console.log("salt:",salt)
    console.log("hashedPassword:",salt)
    const userProvidedPassword = createHmac("sha256", salt).update(password).digest("hex");

    if(hashedPassword !== userProvidedPassword){
        throw new Error("Incorrect Password");
    }

    return user;


})

// Export the User model
const model = mongoose.model("user", userSchema)


module.exports = model
