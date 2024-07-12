import { useEffect ,useState} from "react";
import "./pinfo.css";
import { Link } from "react-router-dom";
function Preview() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [zip, setzip] = useState("");
    useEffect(() => {
      let n = localStorage.getItem("name");
        let e = localStorage.getItem("email");
        let p = localStorage.getItem("phone");
        setname(n); setemail(e); setphone(p); 
    
        let a = localStorage.getItem("address");
        let c = localStorage.getItem("city")
        let s = localStorage.getItem("state")
        let z = localStorage.getItem("zip");
        setaddress(a); setcity(c); setstate(s);setzip(z);
    },[])
    return (
        <>
            <div className="form-container">
    <form className="responsive-form">
        <div className="form-field">
        <label >Name</label>
        <input type="text" id="name" value={name} name="name" readOnly />
        </div>
        <div className="form-field">
        <label >Email</label>
        <input type="email" id="email" value={email} name="email" readOnly />
        </div>
        <div className="form-field">
        <label >Phone</label>
        <input type="tel" id="phone" value={phone} name="phone" readOnly />
                    </div>
                    <div className="form-field">
        <label >Address</label>
        <input type="text" value={address} name="ad" readOnly />
        </div>
        <div className="form-field">
        <label >city</label>
        <input type="text" value={city} name="city" readOnly />
        </div>
        <div className="form-field">
        <label >State</label>
        <input type="tel"value={state}  name="State" readOnly />
                    </div>
                    <div className="form-field">
        <label >zip code</label>
        <input type="tel" value={zip} name="zip code" readOnly />
                    </div>
    <Link to="/addressinfo"><button  className="but">back</button></Link>
        <button type="submit" className="but">Submit</button>
    </form>
    </div>
        </>
    )
}
export default Preview;