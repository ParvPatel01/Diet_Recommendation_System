const setResponse = (response, data) => {
    console.log("Set Response:", data)
    response.status(200);
    return response.json(data);
}

const setError = (response, err) => {
    console.log("err.code",err.code)
    if(err.code === undefined){
        err.code = 500;
    }
    response.status(err.code);
    return response.json({
        error: {
            message: err.message
        }
    })
}

const CustomException = (message, code) => {
    const error = new Error(message)
    error.code = code
    throw error;
}

module.exports = {
    setResponse,
    setError,
    CustomException
}