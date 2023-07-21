const { conn,Form,Model} = require('./db.js');

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
const createForm = async (user, model =1) => {
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
//devuelve los modelos 
async function getModels(){
try {
  const models = await Model.findAll();
  return models;
} catch (error) {
  console.log('Error al buswcar los Models',error)
}
}
// update Form
 const updateForm = async ({ id, form }) => {
  try {
    // Buscar el formulario por el id
    const existingForm = await Form.findByPk(id);

    if (!existingForm) {
      // Si no se encuentra el formulario con el id dado, retornar un error o lanzar una excepción
      throw new Error('Formulario no encontrado');
    }

    // Actualizar los atributos del formulario
    existingForm.pending = false;
    existingForm.data = form;

    // Guardar los cambios en la base de datos
    await existingForm.save();

    // Retornar el formulario actualizado
    return existingForm.email;
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante el proceso
    console.error('Error al actualizar el formulario:', error.message);
    throw error;
  }
};


//Exports
 module.exports = {createForm,completedForm,getFormsByEmail,updateForm,getModels}

