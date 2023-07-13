require('dotenv').config();

const {POSTGRES_DATABASE,POSTGRES_PASSWORD,POSTGRES_HOST,POSTGRES_USER} = process.env;

module.exports = (req,res)=>{

    res.status(200).send(POSTGRES_DATABASE+''+POSTGRES_PASSWORD+''+POSTGRES_HOST+''+POSTGRES_USER)
}