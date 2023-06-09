
import Pizza from "./models/pizza.js"
import { AgregarPizza, EliminarPizza, ObtenerPizzas, ObtenerPizzasById, UpdatePizza} from "./services/pizzaService.js";

import express from "express"

const app = express()
app.use(express.json());
const port = 3000

app.get('/', async (req, res) =>{
    const allPizzas = await ObtenerPizzas()
    res.status(200).send(allPizzas)
})

app.get('/:id', async (req,res)=>{
    
    const id = req.params.id
    const getPizzasId = await ObtenerPizzasById(id)
    res.status(200).send(getPizzasId)
})

 
app.post('/', async (req, res) =>{
    var pizza = new Pizza();
    pizza.nombre = 'Test';
    pizza.descripcion = 'Test';
    pizza.precio = 1000;
    pizza.libreDeGluten = false;

    
    const addPizza = await AgregarPizza(pizza)
    res.status(202).send(addPizza)
})

app.delete('/:id', async (req, res) =>{
    const id = req.params.id
    const deletePizzasId = await EliminarPizza(id)
    res.status(202).send(deletePizzasId)
})
app.listen(port, () => {
    console.log('Ejemplo')
})

app.put ('/api/:id', async (req, res)=> {
    
const id = req.params.id;
console.log(id)
let pizza = new Pizza();
pizza.nombre = req.body.nombre
pizza.descripcion = req.body.descripcion
pizza.precio = req.body.precio
pizza.libreDeGluten = req.body.libreDeGluten
const updatePizza = await UpdatePizza(pizza, id)
return res.status(200).json(pizza)

})