import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <div className="container">
                <Link to={'/'} className='text-light'>
                    <h3>CRUD-React, Redux, Rest-Api & Axios</h3>
                </Link>
            </div>
            <Link to={"/products/new"}
            className="btn btn-primary nuevo-post d-block d-md-inline-block" 
            >Agregar Producto &#43;</Link>
        </nav>
    )
}
