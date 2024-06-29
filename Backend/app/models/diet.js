const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dietSchema = new Schema({
    Name: String,
    CookTime: String,
    PrepTime: String,
    TotalTime: String,
    RecipeIngredientParts: [String],
    Calories: Number,
    FatContent: Number,
    SaturatedFatContent: Number,
    CholesterolContent: Number,
    SodiumContent: Number,
    CarbohydrateContent: Number,
    FiberContent: Number,
    SugarContent: Number,
    ProteinContent: Number,
    RecipeInstructions: [String]
});

module.exports = mongoose.model('diet', dietSchema);