import React from 'react'
import styles from './login_page.module.css'
import flipkart from '../LoginPage/flipkart.png'
function NavBar({loginHandler}) {
  return (
    <div className={styles.Head}>
             <img src={flipkart} className={styles.flipkart_logo}></img>
             
             <input 
                type='search' 
                className={styles.search} 
                placeholder='Search for products, brands and more'
             />                
            

             <button type='button' className={styles.login_button} onClick={loginHandler} >Login</button>
             <h3 className={styles.seller_btn}>Become a Seller</h3>
             <h3 className={styles.more_btn}>More</h3>
             <h3 className={styles.cart_btn}>Cart</h3>
            </div>
  )
}

export default NavBar
