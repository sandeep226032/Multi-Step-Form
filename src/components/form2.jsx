import { useEffect, useState } from "react";
import "./pinfo.css";
import { Link } from "react-router-dom";
function Addressinfo() {
    useEffect(() => {
        
        let a = localStorage.getItem("address");
        let c = localStorage.getItem("city")
        let s = localStorage.getItem("state")
        let z = localStorage.getItem("zip");
        setaddress(a); setcity(c); setstate(s);setzip(z);
    },[])
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [zip, setzip] = useState("");
    const setdata = () => {
        localStorage.setItem("address", address);
        localStorage.setItem("city", city);
        localStorage.setItem("state", state);
        localStorage.setItem("zip", zip);
    }
    return (
        <>
        <div className="form-container">
    <form className="responsive-form">
        <div className="form-field">
        <label >Address:</label>
        <input type="text" id="name" name="name" value={address} onChange={(e)=>setaddress(e.target.value)} required />
        </div>
        <div className="form-field">
        <label >City:</label>
        <input type="texr" id="city" name="city" value={city} onChange={(e)=>setcity(e.target.value)} required />
        </div>
        <div className="form-field">
        <label >State:</label>
        <input type="texr" id="state" name="state" value={state} onChange={(e)=>setstate(e.target.value)} required />
                    </div>
                    <div className="form-field">
        <label >Zip code:</label>
        <input type="number" id="zipcode" name="zipcode" value={zip} onChange={(e)=>setzip(e.target.value)} required />
                    </div>
                    <Link to="/"> <button className="but">back</button></Link>
                    <Link to="/preview"> <button  className="but" onClick={setdata}>Next</button></Link>
       
    </form>
    </div> 
        </>
    )
}
export default Addressinfo;