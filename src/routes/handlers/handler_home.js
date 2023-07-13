require('dotenv').config();
module.exports = (req,res)=>{

    res.status(200).send('Servidor corriendo correctamente')
}