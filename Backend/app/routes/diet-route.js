const {
    Router
} = require("express");
const { authMiddleWare } = require("../middleware/auth_middleware");
const DietController  = require("../controllers/diet-controller.js")

const router = Router();

router.post("/recommended",authMiddleWare,DietController.getRecommendedDietPlan);
router.get("/getNutrition",authMiddleWare,DietController.getFoodNutrition);



module.exports = router;
