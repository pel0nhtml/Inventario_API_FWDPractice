const express = reqquire('express')
const app = express();
const port = 3000;

const productRoutes = require ('./Routes/productRoutes');
const {manejoErrores} = require('./Middlewares/manejoErrores');

// Middleware´s

app.use(express.json()); //Psicopata middleware parsea JSON

app.use ((req, res, next)=> { //Psicopata middleware para rutas no encontradas
   res.status(404).json({message: 'Ruta Perdida...Perdida'});
});

app.use(manejoErrores); //Middleware Pitbull-Mr.Worldwide(Global)

// Ruta de  Psicopata Productos 
app.use('/psicopata_API/productos');

app.listen(port, ()=>{
   console.log(` SOOOY Francheskoooo Viiiiirrgolinniii FIUUUUM!! http://localhost:${port}`);
});