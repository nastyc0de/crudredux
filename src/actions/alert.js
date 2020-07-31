import {types} from '../types';

export const mostrarAlerta = alerta => {
    return (dispatch) => {
        dispatch(crearAlerta(alerta))
    }
}
const crearAlerta = alerta =>({
    type:types.MOSTRAR_ALERTA,
    payload:alerta
})

// ocultar alerta
export const ocultarAlerta = () =>{
    return (dispatch) => {
        dispatch(ocultar())
    }
}
const ocultar = () => ({
    type: types.OCULTAR_ALERTA
})