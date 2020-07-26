import React from 'react'

export const EditProducts = () => {
    return (
        <div className='row justify-content-center'>
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>
                        <form action="">
                            <div className="form-group">
                                <label>Nombre producto:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="NOMBRE PRODUCTO"
                                    name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio producto:</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="PRECIO PRODUCTO"
                                    name="precio"
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
