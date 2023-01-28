import './App.css';
import React, { useState } from 'react';
import NavBar from './Pages/LoginPage/NavBar';
import Card from './components/Card/Card';
import LoginPage from './Pages/LoginPage/LoginPage';
import ItemsPage from './Pages/LoginPage/itemsPage/ItemsPage';
import SignUp from './components/Card/SignUp';


function App() {
  const [login,setLogin] = useState(false)

  const loginHandler = () => {
    setLogin(!login)
    console.log(!login)
  }

  const [electronicMsg,setelectronicMsg] = useState(false)

  const electronicMessage = () => {
    setelectronicMsg(!electronicMsg)
  }

  
  return (
    <div className="App">
        {/* <NavBar loginHandler={loginHandler}/>
        {
          login ? <Card /> : null 
        }
        <LoginPage electronicMessage={electronicMessage}/>
        {
          electronicMsg ? <ItemsPage /> : null
        } */}
        
        <SignUp />

    </div>
  );
}

export default App;
