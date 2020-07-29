import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { eliminarProducto } from '../actions/product';

export const Producto = ({producto}) => {
    const {nombre, precio, id} = producto
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        // preguntar al usuario

        // pasarlo al action
        dispatch(eliminarProducto(id))
    }
    return (
        <tr>
            <td>{nombre}</td>
            <td><span className='font-wight-bold'>$ {precio}</span></td>
            <td className='acciones'>
                <Link to={`/products/edit/${id}`} className='btn btn-primary mr-2'>
                    Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>handleDelete(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}
