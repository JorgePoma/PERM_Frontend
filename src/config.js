const { config } = require('dotenv');
config()

module.exports = {
    au: {
        domain: process.env.REACT_APP_DOM,
        password: process.env.REACT_APP_PASS
    }
}