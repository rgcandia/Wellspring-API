const server = require('./src/app.js')
require('dotenv').config();
const {PORT} = process.env;

//config init
server.listen(PORT,()=>{
    console.log('Servidor Listo en puerto : '+PORT)
});
