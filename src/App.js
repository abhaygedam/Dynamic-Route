import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar"
import { Route, Switch } from "react-router-dom";
import Products from './Component/Products';
import ProductDetails from './Component/ProductDetails';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     
    <Switch>
     <Route exact path="/">
          <h1 style={{
            margin:"200px auto"
          }}>Welcome to Dynamic Products App</h1>
       </Route> 
      
        <Route exact path="/products">
          <Products></Products>
        
      </Route> 
        <Route exact path="/products/:id">
          <ProductDetails></ProductDetails>
        </Route>
      <Route>404 Page not found</Route>
      </Switch>
    </div>
  );
}

export default App;


// Home About Users Contact