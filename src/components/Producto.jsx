import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { eliminarProducto, editarProducto } from '../actions/product';
import Swal from 'sweetalert2';

export const Producto = ({producto}) => {
    
    const {nombre, precio, id} = producto;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = (id) => {
        // preguntar al usuario
        Swal.fire({
            title: 'Quieres borrar este producto?',
            text: "No podras recuperar este archivo!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {
                // pasarlo al action
                dispatch(eliminarProducto(id));

            }
          })
        
    }
    // funcion que redirige de forma programada
    const redireccionarEdicion = producto => {
        dispatch(editarProducto(producto));
        history.push(`/products/edit/${producto.id}`)
    }


    return (
        <tr>
            <td>{nombre}</td>
            <td><span className='font-wight-bold'>$ {precio}</span></td>
            <td className='acciones'>
                <button
                type='button'
                onClick={() => redireccionarEdicion(producto)} 
                className='btn btn-primary mr-2'>
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>handleDelete(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}
