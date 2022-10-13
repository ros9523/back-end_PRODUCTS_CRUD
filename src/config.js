
require('dotenv').config()
const config ={
    port: process.env.PORT|| 9000, 
    nodeEnv:process.env.NODE_ENV || 'development', 
    db:{
        port: process.env.DB_PORT || 5433,
        username:process.env.DB_USER  || 'postgres',
        password:process.env.DB_PASS || 'Ros9523@#' , 
        host:process.env.DB_HOST || 'localhost',
        name:process.env.DB_NAME || 'products'
    }
}

module.exports= config

