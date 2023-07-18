const server = require('./src/app.js')
const {conn} = require('./src/db.js')
const setModelForm = require('./src/services.js')
require('dotenv').config();
const {PORT} = process.env;
//config init

conn.sync().then(()=>{
  
    setModelForm();  
    console.log('db sincronizada')
    server.listen(PORT,()=>{
        console.log('Servidor Listo en puerto : '+PORT)
        
    });
    
});