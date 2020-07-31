import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cargarProductoEdicion } from '../actions/product';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const EditProducts = () => {

    // state para producto
    const [state, setState] = useState({
        nombre:'',
        precio:''
    })
    const dispatch = useDispatch();
    const history = useHistory();
    const producto = useSelector(state => state.products.editProducto)
    useEffect(() => {
        setState(producto)
    }, [producto]);

    // leero los datos del formulario
    const onChangeFormulario = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const {nombre, precio} = state;

    const handleEditSubmit = e =>{
        e.preventDefault();
        dispatch(cargarProductoEdicion(state));
        history.push('/');
    }
    
    return (
        <div className='row justify-content-center'>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>
                        <ToastContainer autoClose={2500} />
                        <form 
                            onSubmit={handleEditSubmit}
                        >
                            <div className="form-group">
                                <label>Nombre producto:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="NOMBRE PRODUCTO"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio producto:</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="PRECIO PRODUCTO"
                                    name="precio"
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                            >
                            Editar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
