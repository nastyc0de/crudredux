import { types } from "../types";

const initialState = {
    productos:[],
    error: null,
    loading: false,
    delProducto: null,
    editProducto: null
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AGREGAR_PRODUCTO:
        case types.LISTADO_PRODUCTO:
            return{
                ...state,
                loading: true
            }
        case types.AGREGAR_PRODUCTO_EXITOSO:
            return{
                ...state,
                loading: false,
                productos:[...state.productos, action.payload]
            }
        case types.AGREGAR_PRODUCTO_ERROR:
        return{
            ...state,
            loading: false,
            error:action.payload
        }
        case types.LISTADO_PRODUCTO_EXITOSO:
        return{
            ...state,
            loading: false,
            error:null,
            productos: action.payload
        }
        case types.ELIMINAR_PRODUCTO_ERROR:
        case types.LISTADO_PRODUCTO_ERROR:
        case types.OBTENER_EDITAR_ERROR:
        return{
            ...state,
            loading: false,
            error:action.payload
        }
        case types.ELIMINAR_PRODUCTO:
        return{
            ...state,
            delProducto:action.payload    
        }
        case types.ELIMINAR_PRODUCTO_EXITOSO:
        return{
            ...state,
            productos: state.productos.filter(producto => producto.id !== state.delProducto),
            delProducto: null
        }
        case types.OBTENER_EDITAR_PRODUCTO:
        return{
            ...state,
            editProducto: action.payload
        }
        case types.OBTENER_EDITAR_EXITO:
        return{
            ...state,
            editProducto: null,
            productos: state.products.map(producto =>
                producto.id === action.payload.id ?
                producto = action.payload : producto
                )
        }
        
        default:
            return state;
    }
}