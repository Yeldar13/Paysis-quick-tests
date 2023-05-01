const client = require('./client')

async function login(username,password){
    return client
        .post('/auth')
        .send({login:username, password:password})
}

module.exports = {login}