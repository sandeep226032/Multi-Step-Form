import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './pinfo.css';
function Personalinfo() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const settolocal = (e) => {
        
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        
        
    }
    useEffect(() => {
        let n = localStorage.getItem("name");
        let e = localStorage.getItem("email");
        let p = localStorage.getItem("phone");
        setname(n);
        setemail(e);
        setphone(p);
    }, [])
    const [nerr, setnerr] = useState("");
    const [eerr, seteerr] = useState("");
    const [perr, setperr] = useState("");
    
    return (
        <>
        <div className="form-container">
    <form className="responsive-form">
        <div className="form-field">
        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => {
                            if (!e.target.value.match("[A-Za-z]+$")) {
                                setnerr("Enter Alphabets only")
                                
                            } else {
                                setnerr("")
                                
                            }
                            setname(e.target.value)
                        }} required />
                        <h4>{ nerr}</h4>
        </div>
        <div className="form-field">
        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} name="email" onChange={(e) => {
                            if (!e.target.value.match("[^\s@]+@[^\s@]+\.[^\s@]+$")) {
                                seteerr("Enter valid email")
                                
                            } else {
                                seteerr("")
                                
                            }
                            setemail(e.target.value)
                        }} required />
                        <h4>{ eerr}</h4>
        </div>
        <div className="form-field">
        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" value={phone} onChange={(e) => {
                            if (e.target.value.match("[A-Za-z]+$")) {
                                setperr("Enter valid number")
                                
                            }
                          else  if (e.target.value.length > 10) { 
                                setperr("Enter valid number")
                            } else {
                                setperr("")
                                
                            }
                            setphone(e.target.value)
                        }} name="phone" required />
                        <h4>{ perr}</h4>
        </div>
       <Link to="/addressinfo"> <button onClick={settolocal}>Next</button></Link>
    </form>
    </div>
        </>
    )
}
export default Personalinfo;