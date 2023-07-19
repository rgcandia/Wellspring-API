const { conn,Form} = require('./db.js');

const data = [
    {
      "id":"0",
      "label":'SOLICITUD DE EVENTO',
      "type":'title'
    },
      {
        "id": "1",
        "label": "Nombre",
        "type": "text",
        
      },
      {
        "id": "2",
        "label": "Correo electrónico",
        "type": "email",
        "defaultValue": ""
      },
      {
        "id": "3",
        "label": "Indicar Sector",
        "type": "select",
        "options": ["Kinder", "Primaria", "Secundaria","Administración","Otro"],
        
      },
      {
        "id":"4",
        "label":"Fecha",
        "type":"fecha"
      },
      {
        "id":"5",
        "label":"Nombre del Evento",
        "type":"text"
  
      },
      {
        "id": "6",
        "label": "Lugar",
        "type": "check",
        "options": ["Teatro", "Tinglado", "Campo de deporte","Otro"],
      
      },
     
    ];

// Function
//Crea formulario pendiente con modelo.
const createForm = async (user, model = data) => {
  let form = await Form.create({
    email: user,
    model,
  });
  return form;
  
};
//Completa el formulario
const completedForm = async (id, data) => {
  try {
    // Find the form with the given id
    const form = await Form.findByPk(id);

    if (!form) {
      // Form with the given id not found
      return null;
    }

    // Update the form's data and pending properties
    form.data = data;
    form.pending = false;
    
    // Save the changes to the database
    await form.save();

    return form;
  } catch (error) {
    console.error('Error updating form:', error);
    throw error;
  }
};


//  devolver Forms
async function getFormsByEmail(email) {
 console.log("se buscva el form del imail")
  console.log(email)
  try {
    const forms = await Form.findAll({
      where: {
        email: email,
      },
    });
    return forms;
  } catch (error) {
    console.error('Error al buscar los formularios por email:', error);
    
  }
}
//Exports
 module.exports = {createForm,completedForm,getFormsByEmail}

