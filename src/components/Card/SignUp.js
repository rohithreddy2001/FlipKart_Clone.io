import React,{useState} from 'react'
import classes from './card.module.css'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'


function SignUp() {
    let navigate = useNavigate()
    const closeHandler = () => {
        navigate('/signInPage')
    }

    
  return (
    <div className={classes.card}>
            <div className={classes.left}>
                <div className={classes.top}>
                    <h2 className={classes.heading}>Looks like you're new here!</h2>
                    <p className={classes.desc}>
                        Sign up to get started
                    </p>
                </div>
                <div className={classes.bottom}>
                    <img src={logo} className={classes.logo_img}/>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.close_btn}>

                    <button onClick={closeHandler}>❌</button>
                    
                </div>
                <form className={classes.right}>
                    <input className={classes.Input_Field2} type='text' placeholder='Enter Your First Name' required></input> <br />
                    <input className={classes.Input_Field2} type='text' placeholder='Enter Your Last Name' required></input> <br />
                    <input className={classes.Input_Field2} type='email' placeholder='Enter Your Email' required></input> <br />
                    <input className={classes.Input_Field2} type='password' placeholder='Create Password' required></input> <br />
                    <input className={classes.Input_Field2} type='password' placeholder='Confirm Password' required></input> <br />
                    <button className={classes.SignUp_btn} type='submit'>Sign Up</button> <br />
                </form>
            </div>

      </div>
      


  
    
  )

  }
export default SignUp
