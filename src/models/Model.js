const {DataTypes} =  require('sequelize');
module.exports=(sequelize)=>{
    sequelize.define('model',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        type:{
            type:DataTypes.STRING,
        },
        data:{
            type:DataTypes.JSON,           
        },
        name:{
            type:DataTypes.STRING,
        },
        description:{
            type:DataTypes.STRING,
        },
        section:{
            type:DataTypes.JSON,
        }
    });
}