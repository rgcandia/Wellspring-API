const server = require('./src/app.js')
const {conn} = require('./src/db.js');
const modelFormSevice = require('./src/modelFormSevice.js');
require('dotenv').config();
const {PORT} = process.env;
//config init

conn.sync().then(()=>{
  
    //  modelFormSevice();
    console.log('db sincronizada')
    server.listen(PORT,()=>{
        console.log('Servidor Listo en puerto : '+PORT)
        
    });
    
});