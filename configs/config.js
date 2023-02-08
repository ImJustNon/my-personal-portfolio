const env = require('dotenv').config()


module.exports = {
    database: {
        mongoDB: {
            URI: env.parsed.mongo_uri || "",
            options: {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        },
    },
    app: {
        address: "127.0.0.1",
        port: 9999,
    },
    birthDate: "09/04/2006", //    MM/DD/YYYY format
}