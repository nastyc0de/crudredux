import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listadoProductos } from '../actions/product';
import { Producto } from '../components/Producto';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Products = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        // CONSULTAR LA API
        dispatch(listadoProductos())
    }, [dispatch]);
    // obtener el state
    const {productos, error, loading} = useSelector(state => state.products)
    return (
        <>
            <h2 className='text-center my-5'>Listado de producto</h2>
            {error && <ToastContainer/>}
            {loading && <p className='text-center'>Cargando....</p>}
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.length === 0 ? <h3>No hay productos</h3> : (
                            productos.map(producto =>(
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
