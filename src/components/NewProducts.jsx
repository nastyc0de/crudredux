import React, { useState } from 'react'
import { crearNuevoProducto } from '../actions/product';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NewProducts = () => {

    // creando el state del componente
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    const dispatch = useDispatch();

    const state = useSelector(state => state.products);

    const {loading, error} = state;

    const agregarProducto = producto => dispatch(crearNuevoProducto(producto));
    
    // cuando el usuario haga el submit
    const handleSubmitNewProduct = e => {
        e.preventDefault();
        
        // validar formulario
        if (nombre.trim() === '' || precio <= 0) {
            return;
        }
        // si no hay errores
        
        // crear un nuevo producto
        agregarProducto({
            nombre,
            precio
        });
    }
    return (
        <div className='row justify-content-center mt-5'>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        <ToastContainer autoClose={2500} />
                        <form
                            onSubmit={handleSubmitNewProduct}
                        >
                            <div className="form-group">
                                <label>Nuevo Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="NOMBRE PRODUCTO"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="PRECIO PRODUCTO"
                                    name="precio"
                                    value={precio}
                                    onChange={e => setPrecio(Number (e.target.value))}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                            >
                            Agregar
                            </button>
                        </form>
                        {error ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un error</p>: null}
                    </div>
                </div>
            </div>
        </div>
    )
}
