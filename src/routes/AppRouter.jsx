import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Products } from '../components/Products';
import { NewProducts } from '../components/NewProducts';
import { EditProducts } from '../components/EditProducts';
import { Header } from '../components/Header';

export const AppRouter = () => {
    return (
        <Router>
            <Header/>
            <div className="container">
                <Switch>
                  <Route exact path='/' component={Products}/>
                  <Route exact path='/products/new' component={NewProducts}/>
                  <Route exact path='/products/edit/:id' component={EditProducts}/>                    
                </Switch>
            </div>
        </Router>
    )
}
