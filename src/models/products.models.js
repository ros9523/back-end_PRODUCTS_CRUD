const { DataTypes } =require ('sequelize')

const db= require('../utils/database')

const Products = db.define('products', {
    id:{
        primaryKey: true, 
        type:DataTypes.UUID, 
        allowNull: false
    },

    name:{
        type: DataTypes.STRING, 
        allowNull:false
    }, 

    category:{
        type:DataTypes.STRING, 
        allowNull:false
    }, 

    price:{
        type: DataTypes.INTEGER, 
        allowNull:false
    },

    isAvailable:{
        type:DataTypes.BOOLEAN, 
        allowNull:false
    }

})

module.exports = Products
