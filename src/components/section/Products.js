import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'
import 'bootstrap/dist/css/bootstrap.css';

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div>
            <div className="row" >
            <div className="col-8 align-center" id="product">
               {products.map(product =>(
                       <div className="card" key={product.name}>
                           <Link to={`/product/${product.name}`}>
                               <img 
                                src={product.image} 
                                alt=""  
                                width="120"
                                className="img img-responsive"/>
                           </Link>
                           <p>{product.name}</p>
                  <span>
                    {new Intl.NumberFormat('th-TH', {
                      style: 'currency',
                      currency: 'THB',
                    }).format(product.price)}
                    /* {new Intl.NumberFormat('km-KM', {
                      style: 'currency',
                      currency: 'KHR',
                    }).format(product.price)} */
                    </span>
                  <p>{product.stock > 0 ? (
                      <small>{product.stock + " Available"}</small>
                    ) : (
                      <small>Out Of Stock</small>
                    )}
                  </p>
                <p>Material: {product.material}</p>
                <p>Created Date:
                   {new Intl.DateTimeFormat('en-GB', { 
                      month: '2-digit', 
                      day: '2-digit',
                      year: 'numeric', 
                  }).format(new Date(product.createdAt))}
                </p>
           
                <button className="btn btn-warning" onClick={()=> addCart(product.name)}>Add to cart</button>
                </div>
                ))
               };
               </ div>
              
            </div>
        </div>
        )
    }
}

export default Products
