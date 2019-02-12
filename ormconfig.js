module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "manuelruck",
    "password": "",
    "database": "myproject",
    "synchronize": true,
    "logging": false,
    "entities": [
       process.env.NODE_ENV === 'production' ? "src/entity/**/*.js" : "src/entity/**/*.ts"
    ],
    "migrations": [
      process.env.NODE_ENV === 'production' ? "src/migration/**/*.js" : "src/migration/**/*.ts"
    ],
    "subscribers": [
      process.env.NODE_ENV === 'production' ? "src/subscriber/**/*.js" : "src/subscriber/**/*.ts"
    ]
 }