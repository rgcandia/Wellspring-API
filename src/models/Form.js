const {DataTypes} =  require('sequelize');
module.exports=(sequelize)=>{
    sequelize.define('form',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        email:{
            type:DataTypes.STRING,

        },
        data:{
            type:DataTypes.JSON,           
        }

    });
}