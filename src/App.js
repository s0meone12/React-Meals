import React, {useState} from 'react'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';




function App() {

const [cartIsShown, setCartIsShown] = useState(false);

const showCartHandler = () => {
  setCartIsShown(true);
}

const hideCartHandler = () => {
  setCartIsShown(false);
}


  return (
    <CartProvider>
      { cartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals />
      </main>
      <Footer></Footer>
      </CartProvider>
  );
}

export default App;
