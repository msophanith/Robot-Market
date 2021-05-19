import React, { Component } from 'react'
import {DataContext} from '../Context'
import '../css/Details.css'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item.name}>
                                <img src={item.image} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.name}</h2>
                                        <span>
                                        {new Intl.NumberFormat('th-TH', {
                                        style: 'currency',
                                        currency: 'THB',
                                        }).format(item.price ? item.price * item.count : 0)}
                                        </span>
                                    </div>
                                    <p><strong>Material:</strong> {item.material}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item.name)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.name)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.name)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <h3>Total: 
                            {new Intl.NumberFormat('th-TH', {
                            style: 'currency',
                            currency: 'THB',
                            }).format(total)}
                        </h3>
                    </div>
                </>
                )
            }
        }
}

export default Cart
