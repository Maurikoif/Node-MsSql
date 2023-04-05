
import Pizza from "./models/pizza.js"
import { AgregarPizza, EliminarPizza, ObtenerPizzas, ObtenerPizzasById} from "./services/pizzaService.js";
await AgregarPizza()
await ObtenerPizzas()
await ObtenerPizzasById(1)
await EliminarPizza(18)
