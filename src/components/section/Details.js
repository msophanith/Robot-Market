import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/Details.css'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item.name === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }

    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <>
                {
                    product.map(item =>(
                        <div className="details" key={item.name}>
                            <img src={item.image} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.name}</h2>
                                    <span>{new Intl.NumberFormat('th-TH', {
                                    style: 'currency',
                                    currency: 'THB',
                                    maximumSignificantDigits: 3
                                    }).format(item.price)}
                                    </span>
                                </div>
                                <p><strong>Material:</strong> {item.material}</p>
                                <p><strong>Created Date:</strong>
                                     {new Intl.DateTimeFormat('en-GB', { 
                                    month: '2-digit', 
                                    day: '2-digit',
                                    year: 'numeric', 
                                }).format(new Date(item.createdAt))}
                                </p>
                                <Link to="/cart" className="cart" onClick={() => addCart(item.name)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details
