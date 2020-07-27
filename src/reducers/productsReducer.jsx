import { types } from "../types";

const initialState = {
    productos:[],
    error: null,
    loading: false
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AGREGAR_PRODUCTO:
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

        default:
            return state;
    }
}