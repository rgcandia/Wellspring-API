const {Server} = require('socket.io')
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


 return io;
})


}