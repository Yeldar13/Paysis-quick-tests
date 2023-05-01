// const supertest = require('supertest')
const {expect} = require('chai')
const {login} = require('../helpers')

describe('Auth', () => {
    describe("Sign in with correct data", () => {
        let response

        before(async () => {
            response = await login(process.env.LOGIN, process.env.PASSWORD)
            // response = await supertest(process.env.BASE_URL)
            //     .post('/auth')
            //     .send({login:process.env.LOGIN, password:process.env.PASSWORD})
        })

        it('Response status code is 200', () => {
            expect(response.statusCode).to.eq(200)
        })

        it('Response body contains authorization token', () => {
            expect(response.body.token).to.be.a('string')
        })
    })
})