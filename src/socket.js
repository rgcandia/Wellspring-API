const { Server } = require('socket.io');
const { getFormsByEmail, 
  createForm ,
  updateForm,
  getModels,
  deleteFormPending} 
  = require('./services.js');
const {emailHandler} = require('./emailHandler.js')
let io;

// Función para inicializar el SOCKET con el httpServer pasado por parámetro.
function initialSocket(httpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: '*',
    }
  });

  // Pongo a escuchar eventos de conexión
  io.on('connection', (socket) => {
    console.log(`Connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`Disconnected: ${socket.id}`);
    });

    // Pongo a escuchar evento "join" para obtener los formularios por email
    socket.on('join', async (email) => {
      const forms = await getFormsByEmail(email);
      const models =  await getModels();
      socket.emit('forms', forms);
      socket.emit('models',models);
    });

    // Pongo a escuchar evento "setForm" para crear un formulario para el email pasado por parámetro
    socket.on('setForm', async ({email,idModel}) => {
      console.log("LLEGA MODELO "+idModel)
      let form = await createForm(email,idModel);
      const forms = await getFormsByEmail(email);
      io.emit(email, forms);
    });

    //config updateForm
    socket.on('updateForm',async ({id,form})=>{
      const email = await updateForm({id,form});
      const forms = await getFormsByEmail(email)
      await emailHandler(form);
      socket.emit("forms", forms);
    })

  // Escucho evento deleteFormPending
  socket.on('deleteFormPending',async({id,user})=>{
     await deleteFormPending(id);
      const forms = await getFormsByEmail(user)
      socket.emit("forms", forms);

  })

  });

  return io;
}

module.exports = initialSocket;