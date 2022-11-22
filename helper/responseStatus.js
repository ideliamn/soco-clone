'use strict';

const responseStatus = {};

responseStatus.code = {
    resOK: 200,
    resCreated: 201, //for create
    resAccepted: 202, //for delete / put
    resBadRequest: 400,
    resUnauthorized: 401, //for with jwt but token not match
    resForbidden: 403, //for no jwt
    resNotFound: 404,
    resMethodNotAllowed: 405,
    resNotAcceptable: 406,
    resInternalServerError: 500,
    resServiceUnavailable: 503,
}
responseStatus.resOK = (res, result) => (
    res.status(responseStatus.code.resOK).send({
        responseCode: responseStatus.code.resOK,
        responseResult: result
    })
)
responseStatus.resCreated = (res, result) => (
    res.status(responseStatus.code.resCreated).send({
        responseCode: responseStatus.code.resCreated,
        responseMessage: 'created',
        responseResult: result
    })
)
responseStatus.resAccepted = (res, result) => (
    res.status(responseStatus.code.resAccepted).send({
        responseCode: responseStatus.code.resAccepted,
        responseMessage: 'success',
        responseResult: result
    })
)
responseStatus.resBadRequest = (res, message) => (
    res.status(responseStatus.code.resBadRequest).send({
        responseCode: responseStatus.code.resBadRequest,
        responseMessage: message
    })
)
responseStatus.resUnauthorized = (res) => (
    res.status(responseStatus.code.resUnauthorized).send({
        responseCode: responseStatus.code.resUnauthorized,
        responseMessage: 'Unauthorized!'
    })
)
responseStatus.resForbidden = (res) => (
    res.status(responseStatus.code.resForbidden).send({
        responseCode: responseStatus.code.resForbidden,
        responseMessage: 'No token provided!'
    })
)
responseStatus.resNotFound = (res, message) => (
    res.status(responseStatus.code.resNotFound).send({
        responseCode: responseStatus.code.resNotFound,
        responseMessage: message
    })
)
responseStatus.resMethodNotAllowed = (res, message) => (
    res.status(responseStatus.code.resMethodNotAllowed).send({
        responseCode: responseStatus.code.resMethodNotAllowed,
        responseMessage: message
    })
)
responseStatus.resNotAcceptable = (res, message) => (
    res.status(responseStatus.code.resNotAcceptable).send({
        responseCode: responseStatus.code.resNotAcceptable,
        responseMessage: message
    })
)
responseStatus.resInternalServerError = (res, message) => (
    res.status(responseStatus.code.resInternalServerError).send({
        responseCode: responseStatus.code.resInternalServerError,
        responseMessage: message,
    })
)
responseStatus.resServiceUnavailable = (res, message) => (
    res.status(responseStatus.code.resServiceUnavailable).send({
        responseCode: responseStatus.code.resServiceUnavailable,
        responseMessage: message,
    })
)



module.exports = responseStatus;
