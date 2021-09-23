import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/products").then((res) => {
            console.log(res.data);
            setProducts(res.data);
        })
    },[])

    return (
        <>
       
            <div>
                 <table style={{
                    border: "1px solid whitesmoke",
                     margin:"150px auto 0px auto"
                       }}>
                <tr>
                    <th className="rowBox">Id</th>
                    <th className="rowBox">Name</th>
                        <th className="rowBox">Price</th>
                        <th className="rowBox">Details</th>
                </tr>
                </table>
            </div>
            {
        
                products.map((e) => (
                    <div
                    key={e.id}>
                    <table style={{
                            border: "1px solid whitesmoke",
                         margin:"0px auto"
                       }}>
                    
                          
                         <tr >
                        <td className="rowBox">{ e.id}</td>
                                <td className="rowBox">{e.name}</td>
                                 <td className="rowBox">{ e.price}</td>
                        <td className="rowBox"><Link to={`/products/${e.id}`}>more details</Link></td>
                         </tr>
                      </table>
                     </div>
                ))
            }
            </>
    );
}

export default Products;