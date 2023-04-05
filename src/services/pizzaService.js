
import Pizza from '../models/pizza.js'
import sql from 'mssql';
import configDB from '../models/DB.js'
export const whereCondition = async () =>
{
   const connection = await sql.connect(configDB)
   const results = await connection.request().input("whereCondition, %eta%").query('SELECT TOP 2 * FROM Pizzas WHERE Pizzas.nombre = whereCondition');

   console.log(results);
}
export const get2Pizzas = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT TOP 2 * FROM Pizzas');

    console.log(results);
}




/*//function no sirve para typescript
 export function getById(id) {

}

export function getAll(id) {
    
}

export function deleteById(id) {
    
}

const getByIdArrow = (id) =>{
    //nuestro codigo
}


si quiero exportar solo una class
class PizzaService{
 function getById(id) {

}

 function getAll(id) {
    
}

 function deleteById(id) {
    
}
}
export default PizzaService;*/