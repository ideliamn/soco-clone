require('dotenv').config(); // this is important!
module.exports = {
    "development": {
        "host": process.env.DB_HOST_DEV,
        "dialect": "postgres",
        "database": process.env.DB_DATABASE_DEV,
        "username": process.env.DB_USER_DEV,
        "password": process.env.DB_PASS_DEV,
        "timezone": "+07:00",
        "logging": true,
        "schema": "public",
        "define": {
            "timestamps": false,
            "freezeTableName": true,
            "charset": 'utf8',
            "dialectOptions": {
                "collate": 'utf8_general_ci'
            },
        },
    },
    "production": {
        "host": process.env.DB_HOST,
        "dialect": "postgres",
        "database": process.env.DB_DATABASE,
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "timezone": "+07:00",
        "logging": false,
        "schema": "public",
        "define": {
            "timestamps": false,
            "freezeTableName": true,
            "charset": 'utf8',
            "dialectOptions": {
                "collate": 'utf8_general_ci'
            },
        },
    }
}