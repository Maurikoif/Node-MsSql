
import Pizza from '../models/pizza.js'
import sql from 'mssql';
import configDB from '../models/DB.js'

export const AgregarPizza = async (pizza) =>
{
   const connection = await sql.connect(configDB)
   
   
   const results = await connection.request()
   .input("pNombre", sql.VarChar, pizza.nombre)
   .input("pDescripcion", sql.VarChar, pizza.descripcion)
   .input("pLibreGluten", sql.Bit, pizza.libreDeGluten)
   .input("pImporte", sql.Int, pizza.precio)
   
   .query('INSERT INTO Pizzas (Nombre, Descripcion, LibreGluten, Importe) VALUES (@pNombre, @pDescripcion, @pLibreGluten, @pImporte)');

   console.log(results);
}

export const ObtenerPizzas = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Pizzas');

    return results.recordset;
}
export const ObtenerPizzasById = async (Id) => {
    const conn = await sql.connect(configDB);
    console.log(Id)
    const results = await conn.request().input("pId", sql.Int, Id)
    .query('SELECT * FROM Pizzas WHERE Id = @pId');

    return results.recordset;
}
export const EliminarPizza = async (Id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input("pId", sql.Int, Id)
    .query('DELETE FROM Pizzas WHERE Id = @pId');

    console.log(results);
}


/*//export const get2Pizzas = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT TOP 2 * FROM Pizzas');

    console.log(results);
}
function no sirve para typescript
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