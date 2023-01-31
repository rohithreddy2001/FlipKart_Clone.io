import React from 'react'
import classes from './cart_list.module.css'
import emptyCart from './emptyCart.png'
import { useNavigate } from 'react-router-dom'
const CartList = () => {

  let navigate = useNavigate()
    const cartLoginHandler =() => {
        console.log(true)
        navigate('/signInPage')
    }
  return (
    <div className={classes.Cart_List}>
      <div className={classes.top_ctn}>
        <div className={classes.topCtn_left}>
          <h3 className={classes.top_header}>Flipkart</h3>
        </div>
        <div className={classes.topCtn_right}>
          <h3 className={classes.top_header}>Grocery</h3>
        </div>
      </div>
      <div className={classes.bottom_ctn}>
        <img src={emptyCart} alt='image not found' className={classes.empty_img} ></img>
        <h4>Missing Cart items?</h4>
        <h5>Login to see the items you added previously</h5>
        <button className={classes.l_btn} onClick={cartLoginHandler}>Login</button>
      </div>
    </div>
  )
}

export default CartList
