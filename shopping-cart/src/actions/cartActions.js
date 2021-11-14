import { ADD_TO_CART , REMOVE_FROM_CART} from "../type";
import store from '../store';

export const addToCart = (product) => (dispatch ) => {

    let alreadyExist = false;
    const cartItems = store.getState().cart.cartItems.slice();
     
    // if(cartItems.length===0){
    //     cartItems.push({ ...product, count:1  }) 
    // }
     
    cartItems.forEach(x => {
        if(x._id === product._id){
            alreadyExist= true;
                x.count++;
               
          }
       })
        

      if(!alreadyExist)
    {
        cartItems.push({ ...product, count:1  })   
    }
    
     
     
     dispatch({
            type:ADD_TO_CART,
            payload: { cartItems },
        }) 
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        
   
}

export const removefromCart = (product) => (dispatch) => {

    const cartItems =store.getState()
    .cart.cartItems.slice()
    .filter((x) => 
    x._id != product._id);
     
    dispatch({
        type : REMOVE_FROM_CART,
        payload: { cartItems },
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    

}