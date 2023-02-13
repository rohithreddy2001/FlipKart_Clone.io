import './App.css';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from './Pages/LoginPage/NavBar';
import SignInPage from './components/Card/SignInPage';
import HomePage from './Pages/LoginPage/HomePage';
import GadgetsPage from './Pages/LoginPage/itemsPage/GadgetsPage';
import SignUp from './components/Card/SignUp';
import HomeItemCard from './Pages/LoginPage/HomeItemCard';
import CartList from './Pages/LoginPage/cartList/CartList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ToysPage from './Pages/LoginPage/itemsPage/ToysPage';
import FooterPage from './Pages/LoginPage/FooterPage';


function App() {

  // const [login,setLogin] = useState(false)
  // const [signUp,setSignUp] = useState(false)
  // const [close,setClose] = useState(false)
  // const [cart,setCart] = useState(false)

  // const loginHandler = () => {
  //   setLogin(!login)
  //   console.log(!login)
  // }

  // const signUpHandler = () => {
  //   setSignUp(!signUp)
  // }

//   const closeHandler = () => {
//     setClose(!close)
// }

  // const cartHandler = () => {
  //   setCart(!cart)
  //   console.log(!cart)
  // }

  // const [electronicMsg,setelectronicMsg] = useState(false)

  // const electronicMessage = () => {
  //   setelectronicMsg(!electronicMsg)
  // }

  
  return (
    <div className="App">
      {/* <Helmet>
        <title>Online Shopping Site</title>
      </Helmet> */}
      
        <BrowserRouter>
          <NavBar  />
          {/* {
            login ? <SignInPage signUpHandler={signUpHandler} close={close} closeHandler={closeHandler} /> : null
          }
          {
            signUp ? <SignUp close={close} closeHandler={closeHandler} /> : null
          } */}
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/gadgetsPage' element={<GadgetsPage />} />
              <Route path='/signInPage' element={<SignInPage />} />
              <Route path='/signUpPage' element={<SignUp />} />
              <Route path='/cartPage' element={<CartList />} />
              <Route path='/toysPage' element={<ToysPage />}/>
            </Routes>
          <FooterPage />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
