const fs = require('fs').promises
const path = require ('path');
const filePath = path.join (__dirname, '../Data/products.json');

//Leer Json
const readData = async()=> {
    const data  = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data)
};

//Escribir Json
const writeData = async (data)=>{
    await fs.writeFile(filePath, JSON.stringify(data,null,2));
}

module.exports ={ readData, writeData };