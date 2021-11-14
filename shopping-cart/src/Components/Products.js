import React, { Component } from 'react'
import formatCurrency from '../utils';
import { Fade , JackInTheBox} from "react-awesome-reveal";
import Modal from 'react-modal';
import { connect } from 'react-redux';
 import {fetchProducts} from '../actions/productActions';
 import {addToCart} from '../actions/cartActions';

 class Products extends Component {
    constructor(){
        super();
        this.state={
            products:null,
        }
    }
    componentDidMount(){
        this.props.fetchProducts();
    }
    openModal = (product) =>{
        this.setState({ product : product })
    }
    closeModal = () =>{
        this.setState({ product : null })
    }

    render() {
        const {product }= this.state;
        return (
            <div>
                 <Fade  cascade>
                     {
                         !this.props.products ? ( <div> Loading .....</div>)
                         :
                         <ul className="products">
                         { this.props.products.map(product => (
                              <li key={product._id}>
                                   <div className="product">
                                       <a href={"#"+product._id} onClick={()=>this.openModal(product)}>
                                         <img src={product.image} alt={product.title} />
                                         <p>{product.title}</p>
                                       </a>
                                       <div className="product-price">
                                           <div>{formatCurrency(product.price)}</div>
                                           <button onClick={()=>this.props.addToCart(product)} 
                                           className="button primary" >Add to Cart</button>
                                       </div>
                                    </div> 
                              </li>
                          ))
                         }
                      </ul>

                     }
               
              </Fade>
                
                {
                    product &&(
                        <Modal isOpen={true} onRequestClose={this.closeModal}>
                            <JackInTheBox>
                            <button className="close-modal"  onClick={this.closeModal}>x</button>
                                <div className="product-details"> 
                                <img src={product.image} alt={product.title} />
                                <div className="product-details-description">
                                    <p>
                                        <strong>{product.title}</strong>
                                    </p>
                                    <p>{product.description}</p>
                                    <p>
                                        Available Sizes:{" "}
                                        {product.availableSizes.map((x)=>(
                                            <span>
                                                {" "}
                                                <button className="button">{x}</button>
                                            </span>
                                        ))}
                                    </p>
                                    <div className="product-price">
                                        <div>{formatCurrency(product.price)}</div>
                                        <button className="button primary" 
                                           onClick={ ()=>{
                                            this.props.addToCart(product);
                                            this.closeModal();
                                        }}>
                                          Add To Cart
                                        </button>
                                        
                                    
                                    </div>
                                </div>
                                
                                 </div>
                                 </JackInTheBox>
                        </Modal>
                    )
                }
            </div>
        )
    }
}



export default connect((state) =>({products:state.products.filteredItems}) , 
{fetchProducts, addToCart}) (Products);