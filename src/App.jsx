import { useState } from 'react'

import './App.css'
import Personalinfo from "./components/form1.jsx";
import Addressinfo from './components/form2.jsx';
import Preview from "./components/preview.jsx";
import { BrowserRouter ,Route ,Link, Routes} from 'react-router-dom';


function App() {
  

  return (
  
    <>
        <h1 className='head'>Multi-Step Form</h1>
        <Routes>
          <Route path="/" Component={Personalinfo}
          ></Route>
        <Route path="/addressinfo" Component={Addressinfo}></Route>
        <Route path='/preview' Component={Preview}></Route>
        </Routes>
          
      <div className='navbar'>
        <Link to="/"> <button className='bar'>
          Step-1
       
        </button></Link>
        <div >
        <Link to="/addressinfo"> <button className='bar'>Step-2</button></Link>
        </div>
        <div >
         <Link to="/preview"><button className='bar'>Preview</button></Link>
        </div>
      </div>
      
    
      </>
      
      
  )
}

export default App
