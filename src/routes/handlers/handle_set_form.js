const {Form} =  require('../../db.js')
module.exports = async  (req,res)=>{
    const data =  req.body;
    //variables a utilizar
    const arrayData = [];
    let email = null;

    //recorro el objeto y formateo la info en el arrayData
    for(let element in data){
        element==='Correo electrónico'?email=data[element]:null
        arrayData.push({[element]:data[element]})
    }

    //se guarda en la base de datos
    let CreatedForm = await Form.create(
        {
            email,
            data:JSON.stringify(data)
        }
    )
   console.log(email)
   
    res.status(200).json(data)
}


