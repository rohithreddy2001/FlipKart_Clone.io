import React,{useState} from 'react'
import classes from './card.module.css'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function SignUp() {
    let navigate = useNavigate()
    const closeHandler = () => {
        navigate('/signInPage')
    }

    const [f_name,setF_name] = useState("")
    const [l_name,setL_name] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [c_password,setC_password] = useState("")


    const f_nameHandler = (e) => {
        setF_name(e.target.value)
    }

    const l_nameHandler = (e) => {
        setL_name(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const c_passwordHandler = (e) => {
        setC_password(e.target.value)
    }


    var api = "http://localhost:8080/user/addUser"

    const submitHandler = (e) => {
        e.preventDefault()
        const user = {
            f_name:f_name,
            l_name:l_name,
            mail:email,
            createPassword:password,
            confirmPassword:c_password
        }
        console.log(user)

        axios.post(api,user)
        
        setF_name("")
        setL_name("")
        setEmail("")
        setPassword("")
        setC_password("")
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
                    <input className={classes.Input_Field2} type='text' value={f_name} placeholder='Enter Your First Name' onChange={f_nameHandler} required></input> <br />
                    <input className={classes.Input_Field2} type='text' value={l_name} placeholder='Enter Your Last Name' onChange={l_nameHandler} required></input> <br />
                    <input className={classes.Input_Field2} type='email' value={email} placeholder='Enter Your Email' onChange={emailHandler} required></input> <br />
                    <input className={classes.Input_Field2} type='password' value={password} placeholder='Create Password' onChange={passwordHandler} required></input> <br />
                    <input className={classes.Input_Field2} type='password' value={c_password} placeholder='Confirm Password' onChange={c_passwordHandler} required></input> <br />
                    <button className={classes.SignUp_btn} type='submit' onClick={submitHandler}>Sign Up</button> <br />
                </form>
            </div>

      </div>
      


  
    
  )

  }
export default SignUp
