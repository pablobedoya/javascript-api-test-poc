const supertest = require('supertest');

const baseUri = 'https://reqres.in/api';
const usersResource = '/users';

class UsersService {
    constructor() {
        this.request = supertest(baseUri);
        this.resource = usersResource;
    }

    createUser(json) {
        return this.request
            .post(usersResource)
            .send(json)
            .set('Accept', 'application/json')
            .expect((res) => {
                if (res.status !== 201) {
                    console.log('The response received was different than expected: ' + res.text);
                }
            })
            .expect(201)
            .end(function (err) {
                if (err) throw err;
            });
    }
}

module.exports = UsersService;