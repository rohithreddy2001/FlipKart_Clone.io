import React from 'react'
import classes from './card.module.css'
import logo from './logo.png'


function SignUp() {
  return (
    <div className={classes.card} >
      {/* style={close ? {display:"none"} : {display:'flex'}} */}
            <div className={classes.left}>
                <div className={classes.top}>
                    <h2 className={classes.heading}>SIGN UP</h2>
                    <p className={classes.desc}>
                        Get access to your Orders, Wishlist and Recommendations
                    </p>
                </div>
                <div className={classes.bottom}>
                    <img src={logo} className={classes.logo_img}/>
                </div>
            </div>
            <div className={classes.right}>
                {/* <div className={classes.close_btn}>

                    <button onClick={(e) => setClose(true)}>❌</button>
                    
                </div> */}
                <input className={classes.Input_Field} type='text' placeholder='Enter Your First Name' required></input> <br />
                <input className={classes.Input_Field} type='text' placeholder='Enter Your Last Name' required></input> <br />
                <input className={classes.Input_Field} type='email' placeholder='Enter Your Email' required></input> <br />
                <input className={classes.Input_Field} type='password' placeholder='Create Password' required></input> <br />
                <input className={classes.Input_Field} type='password' placeholder='Confirm Password' required></input> <br />
                <button className={classes.SignUp_btn} type='submit'>SignUp</button> <br />
            </div>

      </div>
      


  
    
  )

  }
export default SignUp
