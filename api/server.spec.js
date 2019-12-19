const request = require('supertest');

const server = require('./server.js');

describe("server.js", function() {
    describe("envroment", function() {
        it("should set enviroment to testing", function(){
            expect(process.env.DB_ENV).toBe("development")
        });
    });
    describe('GET /', function(){
        it('should return a 200 OK', function () {
            // spin up the server
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            })
            // make a GET erequest to /
            // look at the http status code for the response
        });
        it("shopuld return a JSON", function(){
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i)
            })
        });
        it("shopuld return {api: 'up'}", function(){
            return request(server)
            .get('/')
            .then(res => {
                expect(res.body.api).toBe("up")
            })
        });
    });
});