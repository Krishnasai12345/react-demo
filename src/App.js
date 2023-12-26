
// import { Header } from './Header/Header.js';
// import Footer from './Footer/Footer.js';
// import Menu from './Menu';
import Login from './Login/Login';

import './App.css';
import { useState } from 'react';
import Welcom from './Welcom';


function App() {
  const [isValidLogin,setIsValidLogin]=useState(false);
  const fnGetData=(data)=>{
    console.log("in App",data)
    setIsValidLogin(data)
    console.log(isValidLogin)
  }
  return (
    <div className="App">
     {/* <Header/> 
     <Menu/>
     <Footer/> */}
     {!isValidLogin&&<Login  cb={fnGetData}/>}
     
     {isValidLogin&&<Welcom/>}
   
    </div>
  );
}

export default App;
