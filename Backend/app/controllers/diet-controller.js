const {
    setResponse,
    setError
} = require('./response-handler.js');
const { spawn } = require('child_process');
const http = require('http');

const getRecommendedDietPlan = async(req, res) => {
    try {
        const { nutrition_input, ingredients, params } = req.body;
        const inputData = {
            nutrition_input,
            ingredients,
            params
          };



        return setResponse()
    } catch (error) {
        return setError(res, error)
    }
}

const getFoodNutrition = async (req,res) => {
    try{
        const { searchQuery } = req.body;
        console.log(process.env.EDAMAM_API_URL)
        const options = {
            hostname: process.env.EDAMAM_API_URL,
            path: `/nutrition-data?app_id=${process.env.EADMAM_APP_ID}&app_key=${process.env.EADMA_APP_KEY}&nutrition-type=logging&ingr=${searchQuery}`,
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
          };
        let data = '';
        console.log(options)
        const request = http.request(options,(response)=>{
            console.log(response)
            response.setEncoding('utf8');

            response.on('data', (chunk) => {
                data += chunk;
              });

              response.on('end', () => {
                console.log(data);
              });
        
        })

        request.on('error', (error) => {
            console.error(error);
          });

          request.end();

        return setResponse(res,"")

    } catch(err){
        return setError(res, err)

    }
}

module.exports = {
    getRecommendedDietPlan,
    getFoodNutrition
}