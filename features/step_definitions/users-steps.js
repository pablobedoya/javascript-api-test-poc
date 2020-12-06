const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const CreateUserRequest = require('../../model/request/create-user-request');
const UsersService = require('../../service/users-service');

let createUserRequest = new CreateUserRequest();
let usersService = new UsersService();
let response;

Given('I want to register a user', function () {
    createUserRequest.requestName = 'Morpheus';
    createUserRequest.requestJob = 'Leader';
});

When('I submit a request to register it', function () {
    response = usersService.createUser(createUserRequest);
});

Then('Should return that user was successfully created', function () {
    assert.strictEqual(response._data.requestName, createUserRequest.requestName);
    assert.strictEqual(response._data.requestJob, createUserRequest.requestJob);
});