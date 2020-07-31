import { types } from "../types";
import {clienteAxios} from '../config/axios';
import { toast } from "react-toastify";
import Swal from 'sweetalert2';



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

// eliminar producto
export const eliminarProducto = (id) => {
    return async(dispatch) => {
        dispatch(obtenerId(id));
         try {
             await clienteAxios.delete(`/productos/${id}`);
             dispatch(eliminarProductoExito());
             Swal.fire(
                'Borrado',
                'Tu archivo ha sido borrado',
                'success'
              )
         } catch (error) {
             dispatch(eliminarProductoError());
         };
    }
}
const obtenerId = id =>({
    type:types.ELIMINAR_PRODUCTO,
    payload: id
});
const eliminarProductoExito=()=>({
    type:types.ELIMINAR_PRODUCTO_EXITOSO
})
const eliminarProductoError=()=>({
    type:types.LISTADO_PRODUCTO_ERROR,
    payload: true
})

// COLOCAR EL PRODUCTO EN EDICION

export const editarProducto = producto => {
    return(dispatch) => {
        dispatch(obtenerProducto(producto))
    }
}

const obtenerProducto = producto =>({
    type: types.OBTENER_EDITAR_PRODUCTO,
    payload: producto
})

// EDITAR UN REGISTRO EN LA API Y EL STATE COMENZAR_EDICION_PRODUCTO
export const cargarProductoEdicion = producto =>{
    return async(dispatch) => {
        dispatch(cargarProducto());
        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
            dispatch(editarProductoExito(producto));
            toast.info("Producto modificado");
        } catch (error) {
            toast.error("Existe un error");
        }
    }
}
const cargarProducto = producto =>({
    type: types.COMENZAR_EDICION_PRODUCTO,
    payload: producto
})
const editarProductoExito = producto => ({
    type: types.OBTENER_EDITAR_EXITO,
    payload: producto
})