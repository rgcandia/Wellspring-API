const server = require('./src/app.js')
// const {conn} = require('./src/db.js')
require('dotenv').config();
const {PORT} = process.env;
const {POSTGRES_DATABASE,POSTGRES_PASSWORD,POSTGRES_HOST,POSTGRES_USER} = process.env;
//config init

// conn.sync().then(()=>{
//     console.log('db sincronizada')
//     server.listen(PORT,()=>{
//         console.log('Servidor Listo en puerto : '+PORT)
//     });
    
// }).catch((res)=>{
//     console.log(res)
// })
server.listen(PORT,()=>{
    console.log('Servidor Listo en puerto : '+PORT)
    console.log(POSTGRES_DATABASE+''+POSTGRES_PASSWORD+''+POSTGRES_HOST+''+POSTGRES_USER)
});