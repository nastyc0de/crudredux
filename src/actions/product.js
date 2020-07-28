import { types } from "../types";
import {clienteAxios} from '../config/axios';
import { toast } from "react-toastify";



// Crear nueva producto
export const crearNuevoProducto = (producto) =>{
    return async(dispatch) => {
        dispatch(setProduct() );
        try {
            // insertar en la API
            await clienteAxios.post('/productos', producto);
            // si todo sale bien actualiza el state
            dispatch(setProductSuccess(producto));
            // llamar a la alerta
            toast.success("Producto agregado");
        } catch (error) {
            dispatch(setProductError(true));
        }
    }
}
const setProduct = () => ({
    type: types.AGREGAR_PRODUCTO
})

// producto se guardo exitosamente
const setProductSuccess = (producto) =>({
    type: types.AGREGAR_PRODUCTO_EXITOSO,
    payload: producto
})
// si existe un error
const setProductError = estado =>({
    type: types.AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

// FUNCIONES PARA MOSTRAR EL LISTADO DE LOS PRODUCTOS
export const listadoProductos = () => {
    return async(dispatch) => {
        dispatch(listarProducto());
        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch(listarProductoExitoso(respuesta.data) )
        } catch (error) {
            dispatch(listarProductoError(error))
            toast.error("Existe un error");
        }
    }
}
const listarProducto = () => ({
    type: types.LISTADO_PRODUCTO,
    payload: true
})
const listarProductoExitoso = (producto)=>({
    type:types.LISTADO_PRODUCTO_EXITOSO,
    payload: producto
})
const listarProductoError = error =>({
    type:types.LISTADO_PRODUCTO_ERROR,
    payload: error
})