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
       process.env.NODE_ENV === 'production' ? process.env.TYPEORM_ENTETIES : "src/entity/**/*.ts"
    ],
    "migrations": [
      process.env.NODE_ENV === 'production' ? process.env.TYPEORM_MIGRATIONS : "src/migration/**/*.ts"
    ],
    "subscribers": [
      process.env.NODE_ENV === 'production' ? process.env.TYPEORM_SUBSCRIBERS : "src/subscriber/**/*.ts"
    ]
 }

 console.log("TYPEORM_CONFIG", process.env.NODE_ENV)