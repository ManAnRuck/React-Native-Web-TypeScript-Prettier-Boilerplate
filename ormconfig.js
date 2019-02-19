module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": process.env.POSTGRESQL_PORT || 5555,
    "username": "myuser",
    "password": "mypassword",
    "database": "myproject",
    "synchronize": true,
    "logging": false,
    "entities": [
       process.env.NODE_ENV === 'production' ? "dist/entity/**/*.js" : "src/entity/**/*.ts"
    ],
    "migrations": [
      process.env.NODE_ENV === 'production' ? "dist/migration/**/*.js" : "src/migration/**/*.ts"
    ],
    "subscribers": [
      process.env.NODE_ENV === 'production' ? "dist/subscriber/**/*.js" : "src/subscriber/**/*.ts"
    ]
 }