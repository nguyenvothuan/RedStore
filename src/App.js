import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Product from './components/Products';
import About from './components/About';
import Cart from './components/Cart';
import {BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import MultiPagesProduct from './components/MultiPagesProducts';
function App() {
  return (
    
    <>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/product" component={MultiPagesProduct}/>
            <Route exact path='/cart' component={Cart}/>
        </Switch>      
    </>
    
  );
}

export default withRouter(App);
