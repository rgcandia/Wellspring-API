//improtaciones
const {Router} = require('express');
const handler_home = require('./handlers/handler_home.js')
// instancias
const router =  Router();
//config

router.get('/',handler_home);

//export
module.exports=router;
