const {DataTypes} =  require('sequelize');
module.exports=(sequelize)=>{
    sequelize.define('modelform',{
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
        },
        pending:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
        }

    });
}