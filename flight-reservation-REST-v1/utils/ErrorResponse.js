class ErrorResponse extends Error{
    constructor(errorCode, message){
        super(message)
        this.errorCode = errorCode
    }
}

module.exports = ErrorResponse;

