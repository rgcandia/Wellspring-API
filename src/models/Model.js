const {DataTypes} =  require('sequelize');
module.exports=(sequelize)=>{
    sequelize.define('model',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        data:{
            type:DataTypes.JSON,           
        },
        name:{
            type:DataTypes.STRING,
        }
    });
}