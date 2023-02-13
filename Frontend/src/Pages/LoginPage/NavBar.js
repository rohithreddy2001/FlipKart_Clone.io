import React from 'react'
import styles from './login_page.module.css'
import flipkart from '../LoginPage/flipkart.png'
import { useNavigate } from 'react-router-dom'
import search_icon  from './search_icon.png'
function NavBar() {
    let navigate = useNavigate()
    const loginHandler =() => {
        console.log(true)
        navigate('/signInPage')
    }
    const cartHandler =() => {
        console.log("clicked")
        navigate('/cartPage')
    }
    const homePageHandler =() => {
        console.log("clicked")
        navigate('/')
    }
    

  return (
    <div className={styles.Head}>
        <img src={flipkart} className={styles.flipkart_logo} onClick={homePageHandler}></img>
        
        <div className={styles.search_ctn}>
        <input type='search' className={styles.search} placeholder='Search for products, brands and more'/> 
        <img src={search_icon} className={styles.search_icon}></img>
               
        </div>

        <button type='button' className={styles.login_button} onClick={loginHandler} >Login</button>
        <h3 className={styles.seller_btn}>Become a Seller</h3>
        <h3 className={styles.more_btn}>More</h3>
        <h3 className={styles.Cart_btn} onClick={cartHandler}>Cart</h3>
    </div>
  )
}

export default NavBar
