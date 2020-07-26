import { types } from "../types";

// Crear nueva producto
export const crearNuevoProducto = (nombre, precio) =>{
    return () => {
        console.log(`${nombre} cuesta ${precio}`);
    }
}