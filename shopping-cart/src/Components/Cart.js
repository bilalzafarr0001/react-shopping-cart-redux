import React, { Component } from 'react';
import formatCurrency from '../utils';
import { Fade } from "react-awesome-reveal";
 import {connect} from 'react-redux';
 import { removefromCart } from '../actions/cartActions';
import {createorder, clearorder} from '../actions/orderActions';
import Modal from 'react-modal'; 


 class Cart extends Component {
     
     constructor(props){
         super(props);
         this.state={
                   
            showCheckout:false,
            name:"",
             email:"",
            address:"",     
 }
     }
    
 handluInput = (e) =>{
   this.setState({ [e.target.name]: e.target.value })
}
  createOrder=(e)=>{
    e.preventDefault();
    const order={
        name:this.state.name,
        email:this.state.email,
        address:this.state.address,
        cartItems:this.props.cartItems,
        total:this.props.cartItems.reduce((a,c) => a + c.price * c.count, 0 ),
    };
    this.props.createorder(order);
}

clearModal=()=>{
    this.props.clearorder(); 
}
    render() {
        const { cartItems , order} = this.props;
        
        return (
           <div>
              
                {cartItems.length===0 ?
                 (<div className="cart cart-header" > Cart is Empty </div>)
                : (<div className="cart cart-header" >You have {cartItems.length} in the Cart {" "}  </div>
                )} 
                   
               { order && 
                   <Modal isOpen={true} onRequestClose={this.closeModal}> 
                        <Fade>
                           <button className="close-modal" onClick={this.closeModal}>x</button>
                           <div className="order-details">
                               <h3 className="order-success">Your order has been placed </h3>
                               <h2>order {order._id}</h2>
                               <ul>
                                   <li>
                                       <div>Name:</div>
                                       <div>{order.name}</div>
                                   </li>
                                   <li>
                                       <div>Email:</div>
                                       <div>{order.email}</div>
                                   </li>
                                   <li>
                                       <div>Address:</div>
                                       <div>{order.address}</div>
                                   </li>
                                   <li>
                                       <div>Total:</div>
                                       <div>{formatCurrency(order.total)}</div>
                                   </li>
                                    <li>
                                       <div>CartItems:</div>
                                       <div>
                                           { order.cartItems.map((x, index)=>
                                            (
                                              <div key={index}>{x.count} { " x "} {x.title} {"  "}</div>
                                       )
                                       )}
                                       </div>
                                   </li> 
                               </ul>
                           </div>
                           </Fade>
                   </Modal>
               }
               
            <div className="cart">
                <Fade>
                <ul className="cart-items">
                    { cartItems.map(item=>(
                        <li key={item._id}>
                        <div><img src={item.image} alt={item.title} /></div>
                        <div>
                            <div> {item.title}</div>
                            <div className="right" >
                                {formatCurrency(item.price)} x {item.count} { " "}
         <button className="button" 
         onClick={() => this.props.removefromCart(item) } >Remove</button>
                            </div>
                            
                           </div>
                           </li>
 
                    ))}
                    
                </ul>
                </Fade>
            </div>
                 { cartItems.length !== 0 && (
                    
                     <div>
                      <div className="cart">
                      <div className="total">
                          <div>
                              Total : {" "}
                              {formatCurrency(cartItems.reduce((a,c)=>a +c.price*c.count,0)
                              )}
                              <button className="button primary" 
                              onClick={()=>this.setState({showCheckout:true})}>Proceed</button>
                          </div>
                      </div>
                  </div>
                        {this.state.showCheckout && (
                              
                                <div className="cart">
                                    <form onSubmit={this.createOrder}>

                                        <ul className="form-container">
                                            <li>
                                                <label>Email</label>
                                                <input name="email" type="email" required onChange={this.handleInput}/>
                                            </li>
                                            <li>
                                                <label>Name</label>
                                                <input name="name" type="text" required onChange={this.handleInput}/>
                                            </li>
                                            <li>
                                                <label>Address</label>
                                                <input name="address" type="text" required onChange={this.handleInput}/>
                                            </li>
                                            <li>
                                                <button type="submit" className="button primary">Checkout</button>
                                            </li>

                                        </ul>
                                    </form>
                                </div>
                                
                            )}
                </div>
                 )}        
    </div>
        )
   }
 }
                


 export default connect ((state)=> ({
      order:state.order.order,
      cartItems:state.cart.cartItems,
 }),
 {removefromCart, createorder, clearorder})
  (Cart);