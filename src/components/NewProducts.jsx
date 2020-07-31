import React, { useState } from 'react'
import { crearNuevoProducto } from '../actions/product';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mostrarAlerta, ocultarAlerta } from '../actions/alert';

export const NewProducts = ({history}) => {

    // creando el state del componente
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    const dispatch = useDispatch();

    const state = useSelector(state => state.products);
    const alerta = useSelector(state => state.alert.alerta);

    const {error} = state;

    const agregarProducto = producto => dispatch(crearNuevoProducto(producto))
    
    // cuando el usuario haga el submit
    const handleSubmitNewProduct = e => {
        e.preventDefault();
        
        // validar formulario
        if (nombre.trim() === '' || precio <= 0) {
            const alerta = {
                msg:'Ambos campos son obligatorios',
                clases:'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(mostrarAlerta(alerta));
            return;
        }
        // si no hay errores
        dispatch(ocultarAlerta());
        // crear un nuevo producto
        agregarProducto({
            nombre,
            precio
        });
        // redireccionar
        history.push('/');
    }
    return (
        <div className='row justify-content-center mt-5'>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        {alerta ? <p className={alerta.clases}>{alerta.msg}</p>:null}
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
