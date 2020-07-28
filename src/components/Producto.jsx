import React from 'react';
import { Link } from 'react-router-dom';

export const Producto = ({producto}) => {
    const {nombre, precio, id} = producto
    
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
                >Eliminar</button>
            </td>
        </tr>
    )
}
