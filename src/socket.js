const {Server} = require('socket.io')
const {getFormsByEmail,createForm} = require ('./services.js')
let io;
//inicializo el SOCKET con el httpServer pasado por parámetro.
module.exports = function initialSocket(httpServer){
   io = new Server(httpServer,{
    cors:{
        origin:'*',
    }
   });

// Pongo a escuchar 
  //Pongo a escuchar io
  io.on("connection", (socket) => {
    console.log(`Connected: ${socket.id}`);

    socket.on("disconnect", async () => {
      console.log(`Disconnected: ${socket.id}`);
      
    });

    // Pongo a escuchar eventos
 io.on('join',async (email)=>{

  const forms = await getFormsByEmail(email)
  
  socket.emit('forms',forms);
  
 });


// set form event , crea un formulario para el mail paswado por parametro
io.on('setForm',async (email)=>{
  let form = await createForm(email);
  const forms = await getFormsByEmail(email)
  socket.emit(email,forms);
});





 return io;
})


}