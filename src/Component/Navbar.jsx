import { Switch, Link } from "react-router-dom";
import "./Table.css";

const Navbar = () => {
    return (
        <>
            <div style={{
                width: "40%",
                margin: "0px auto",
                display: "flex",
                textAlign: "center",
                justifyContent: "space-evenly"
            }}>     
                <button className="butt"> <Link to="/">Home</Link></button> <br />
                <button className="butt"> <Link to="/products">Products</Link></button>
                <br />
        </div>         
     </>       
    );
}

export default Navbar;