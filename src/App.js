import './App.css';
import React, { useState } from 'react';
import NavBar from './Pages/LoginPage/NavBar';
import Card from './components/Card/Card';
import LoginPage from './Pages/LoginPage/LoginPage';
import GadgetsPage from './Pages/LoginPage/itemsPage/GadgetsPage';
import SignUp from './components/Card/SignUp';
import HomeItemCard from './Pages/LoginPage/HomeItemCard';


function App() {
  const [login,setLogin] = useState(false)
  const [signUp,setSignUp] = useState(false)

  const loginHandler = () => {
    setLogin(!login)
    console.log(!login)
  }

  const signUpHandler = () => {
    setSignUp(!signUp)
  }

  const [electronicMsg,setelectronicMsg] = useState(false)

  const electronicMessage = () => {
    setelectronicMsg(!electronicMsg)
  }

  
  return (
    <div className="App">
        <NavBar loginHandler={loginHandler}/>
        {
          login ? <Card signUpHandler={signUpHandler} /> : null 
        }
         <LoginPage electronicMessage={electronicMessage}/>
        {
          electronicMsg ? <GadgetsPage /> : null
        }
        
        {
          signUp && <SignUp />
        }
        {/* <GadgetsPage /> */}
        {/* <HomeItemCard /> */}
        
    </div>
  );
}

export default App;
