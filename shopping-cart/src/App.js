import React,{Component} from 'react';
import Filter from './Components/Filter';
import Products from './Components/Products';
//import data from "./data.json";
import Cart from './Components/Cart';
import store from './store';
 import {Provider } from 'react-redux';

class App extends Component {
 


  render(){
  return (
    <Provider store={store}>
    <div className="App">
      <div className="grid-container">
        <header>
          <a href="#">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div class="main">
              <Filter />
              <Products/>
            </div>
            <div className="sidebar">
               <Cart />
            </div>
          </div>
        </main>
        <footer>All Rights is Reserved</footer>

      </div>
    </div>
    </Provider>
  );
  }
}
export default App;
