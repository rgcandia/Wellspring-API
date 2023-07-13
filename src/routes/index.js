//improtaciones
const {Router} = require('express');
const handler_home = require('./handlers/handler_home.js')
const handle_set_form = require('./handlers/handle_set_form.js')
// instancias
const router =  Router();
//config

router.get('/',handler_home);
router.post('/formulario',handle_set_form);

//export
module.exports=router;
