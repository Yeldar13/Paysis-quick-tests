const supertest = require('supertest')

module.exports = supertest(process.env.BASE_URL)