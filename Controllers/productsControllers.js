const { readData, writeData} = require('../Services/Read&Write');

    const getProducts = async (req,res,next) =>{
        try {
            const productos = await readData();
            res.json(productos)
        } catch (error) {
            next(error); //no es mi problema,que lo haga mr.worlwide manejoErrores
        }
    };
    const getProductsXid = async (req,res,next) => {
        try {
            const {id} = req.params;
            const productos = await readData();
            const product = productos.find(p => p.id === parseInt(id));
            if (!product) return res.status(404).json({message: 'Producto valio verga no lo encuentro'})
        } catch (error) {
            next(error);
        }
    };


    const postProduct = async (req,res,next) => {
        try {
            const {name, description, price, quantity} = req.body;
            if ( !name || !description || !price || !quantity ){
                return res.status(404).json({ message: 'Faltan campos perro!'});
            }

            const productos = await readData();
            const newProduct = {id: productos.length +1,
              name,
              description,
              price,
              quantity};

            productos.push(newProduct);
            await writeData(productos);

            res.status(201).json(newProduct);
        } catch (error) {
            next(error);
        }
    };
    const putProducts = async (req,res,next) => {
        try {
           const {id} = req.params;
           const { name, description, price, quantity} = req.body;
           const productos = await readData();
           const index = productos.findIndex(p => p.id === parseInt(id));
           if (index === -1) return res.status(404).json ({message: 'Producto valio verga no lo encuentro'})

        //Actualiza propiedades enviadas
        const putProducts = {...productos[index],
            name,
            description,
            price,
            quantity
        };
        productos[index] = putProducts;
        await writeData(productos);
        res.json(putProducts);
         
        } catch (error) {
            next(error);
        }
        
    }






module.exports ={
    getProducts,
    getProductsXid,
    postProduct,
    putProducts
}