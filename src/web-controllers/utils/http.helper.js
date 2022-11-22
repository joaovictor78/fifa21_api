"use strict";
exports.__esModule = true;
exports.serverError = exports.badRequest = exports.ok = exports.created = void 0;
var created = function (data) { return ({
    statusCode: 201,
    body: data
}); };
exports.created = created;
var ok = function (data) { return ({
    statusCode: 200,
    body: data
}); };
exports.ok = ok;
var badRequest = function (data) { return ({
    statusCode: 400,
    body: data
}); };
exports.badRequest = badRequest;
var serverError = function (data) { return ({
    statusCode: 500,
    body: data
}); };
exports.serverError = serverError;
