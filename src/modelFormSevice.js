const { Model} = require('./db.js');
module.exports = async()=>{
let model = await Model.create({
data,
name:'solicitud de evento'
})
return model;
}
const subData = [
  
      {
        'id':'1',
        'label':'Cantidad de padres',
        'type':'number',
      },
      {
        'id':'2',
        'label':'Cantidad de alumnos',
        'type':'number',
      },
      {
        'id':'3',
        'label':'Fondo de escenario blanco',
        'type':'select',
        'options':['5 paneles','7 paneles']
      },
      {
        'id':'4',
        'label':'Mesas',
        'type':'number'
      },
      {
        'id':'5',
        'label':'Pupitres',
        'type':'number'
      },
      {
        'id':'6',
        'label':'Sillas',
        'type':'number'
      },
      {
        'id':'7',
        'label':'Gradas',
        'type':'number'
      },
      {
        'id':'7',
        'label':'Tarimas',
        'type':'number'
      },
      {
        'id':'8',
        'label':'Selector1',
        'type':'check',
        'options':["Pantalla","Proyector arriba(proyecta en el medio del escenario)","Proyector abajo (proyecta en un costado)","Luces y pulsadores","Fondo de prensa"]
      },
      {
        'id':'9',
        'label':'Mantel',
        'type':'number'
      },
      {
        'id':'10',
        'label':'Micrófono',
        'type':'number'
      },
      {
        'id':'11',
        'label':'Video o presentación',
        'type':'text'
      },
      {
        'id':'12',
        'label':'Selector2',
        'type':'check',
        'options':["Computadora","Escudo del colegio","Aire acondicionado","Puntero"]
      },
      {
        'id':'13',
        'label':'Selector3',
        'type':'check',
        'options':["Café",
        "Agua caliente",
        "Jarra con agua",
        "Azúcar",
        "Edulcorante",
        "Vasos plásticos (frio)",
        "Vasos telgopor (calor)",
        "Vaso vidrio",
        "Jarra",
        "Batidores",
        "Servilleta",
        "Hielo",
      ]
      }
     ];
     
  

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
      {
        'id':'7',
        'label':'Teatro',
        'type':'section',
        'data':subData,
      }
     
    ];

