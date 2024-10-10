// Este middleware maneja errores de forma global
// lo hice para no estar escribiendo la misma verga de error para esto y para lo otro
// la vara es que agarramos el error y lo manejamos en un lugar central osea aqui
// es para evitar que la carambada se caiga y de una respuesta limpia al cliente

const manejoErrores = (err, req, res, next) => {
   console.log(`Error: ${err.message}`);
   res.status(500).json({ message: 'El Server esta valiendo verga',error: err.message});
};

module.exports={manejoErrores};