const { conn, Modelform,Form} = require('./db.js');

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

module.exports = async ()=>{
    
    let CreateModelForm = await Modelform.create(
        {
            email:'admin@wellspring.edu.ar',
            data

        }
    );
     
        return console.log("Formulario creado")
}


