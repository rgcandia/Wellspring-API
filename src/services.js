const { conn,Form,Model} = require('./db.js');


// Function
//Crea formulario pendiente con modelo.
const createForm = async (user, model) => {
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

