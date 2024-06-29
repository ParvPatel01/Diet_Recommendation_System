const {
    setResponse,
    setError
} = require('./response-handler.js');
const {
    spawn
} = require('child_process');
const https = require('https');

const getRecommendedDietPlan = async (req, res) => {
    try {
        const {
            nutrition_input,
            ingredients,
            params
        } = req.body;
        const inputData = {
            nutrition_input,
            ingredients,
            params
        };
   
        console.log(process.env.FOOD_API_URL)
        
        let data = '';
        // console.log(options)
        const url = `${process.env.FOOD_API_URL}/mealplanner?apiKey=${process.env.FOOD_APP_KEY}`
        console.log(url)
        const request = await https.get(url, (response) => {
            // console.log("response_+++++++++",response)
            response.setEncoding('utf8');

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                data = JSON.parse(data);
                console.log("data++", data);

                return setResponse(res, data)

            });

        })

        request.on('error', (error) => {
            console.error("error+++++++", error);
            return setError(res, error)

        });

        request.end();

        console.log("first++++++", data)


    } catch (error) {
        return setError(res, error)
    }
}

const getFoodNutrition = async (req, res) => {
        const {
            searchQuery
        } = req.body;
        console.log(process.env.EDAMAM_API_URL)
        
        let data = '';
        // console.log(options)
        const url = `${process.env.EDAMAM_API_URL}/nutrition-data?app_id=${process.env.EADMAM_APP_ID}&app_key=${process.env.EADMAM_APP_KEY}&nutrition-type=logging&ingr=${searchQuery}`
        console.log(url)
        const request = await https.get(url, (response) => {
            // console.log("response_+++++++++",response)
            response.setEncoding('utf8');

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                data = JSON.parse(data);
                console.log("data++", data);

                return setResponse(res, data)

            });

        })

        request.on('error', (error) => {
            console.error("error+++++++", error);
            return setError(res, error)

        });

        request.end();

        console.log("first++++++", data)


}

module.exports = {
    getRecommendedDietPlan,
    getFoodNutrition
}