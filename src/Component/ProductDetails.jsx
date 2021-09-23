import { useEffect, useState } from "react";
import { useParams } from "react-router";
import  axios  from "axios";

function ProductDetails() {
    const [products, setProducts] = useState([]);
      const param = useParams();
    console.log(param.id);
   
    useEffect(() => {
        axios.get(`http://localhost:3002/products/${param.id}`).then((res) => {
            setProducts(res.data);
        });
    }, []);
  
    
    return (
        
        <div>
            <h1>
                Products Details
            </h1>
            <p>Product Id:- {"     "}{products.id} </p>
            <p>Product Name:- {"     "}{products.name} </p>
            <p>Product Price:- {"     "} {products.price} </p>
        </div>
    );
}

export default ProductDetails;