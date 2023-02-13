import { display } from '@mui/system'
import React, { useState } from 'react'
import classes from './card.module.css'
import logo from './logo.png'
import SignUp from './SignUp'
import App from '../../App'
import { useNavigate } from 'react-router-dom'

function Card () {
    const [name,setName] = useState("")
    const [pass,setPass] = useState("")
    
    let navigate = useNavigate()
    const signUpHandler =() => {
        navigate('/signUpPage')
    }
    const closeHandler = () => {
        navigate('/')
    }

    function inputHandler(event) {
        setName(event.target.value)
        event.preventDefault()
    }
    function passHandler(e) {
        setPass(e.target.value)
        e.preventDefault()
    }
    function buttonHandler() {
        alert(`Name: ${name}, Password: ${pass}`);
        setName("");
        setPass("");
    }

    
    
    return(
        <div className={classes.card}>
            {/* style={close ? {display:"none"} : {display:'flex'}} */}
            <div className={classes.left}>
                <div className={classes.top}>
                    <h2 className={classes.heading}>Login</h2>
                    <p className={classes.desc}>
                        Get access to your Orders, Wishlist and Recommendations
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
                <input className={classes.Input_Field} type='text' placeholder='Enter Email/Mobile Number' onChange={inputHandler} value={name} required></input> <br />
                <input className={classes.Input_Field} type='password' placeholder='Enter Password' onChange={passHandler} value={pass} required></input> <br />
                <div className={classes.Field}>
                    <input type='checkbox' /> <label>Remember Me</label>
                    <a className={classes.forgot} href='#'>Forgot Password?</a>
                </div>
                <p className={classes.para}>* By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                <button className={classes.Login_btn} type='submit' onClick={buttonHandler}>Login</button> <br />
                <div className={classes.SignUp_Field}>
                    <a onClick={signUpHandler} >New to Flipkart? Create an account</a>
                </div>
                </form>
            </div>
        </div>
    )
}


export default Card