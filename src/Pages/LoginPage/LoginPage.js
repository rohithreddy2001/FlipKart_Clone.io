// import SearchIcon from "@material-ui/icons/Search";
import Card from '../../components/Card/Card'
import styles from './login_page.module.css'
import flipkart from './flipkart.png'
import { useState } from 'react'
import Electronics from './Electronics'
import ToysSection from './ToysSection'
import ItemsPage from './itemsPage/ItemsPage'

function LoginPage({electronicMessage}){

    
    
    const [toyMsg,setToyMsg] = useState(false)


    
    
    

    const toyMessage = () => {
        setToyMsg(!toyMsg)
    }
    

    return(
        <div className={styles.login_page}>
                <div className={styles.Top}>
                    <div className={styles.Top_Left}>
                    <h2 className={styles.left_div}>Best Of Electronics</h2> <br />
                    <button className={styles.view_top} onClick={electronicMessage}>VIEW ALL</button>
                    </div>
                    <div className={styles.Top_Right}>
                        top right
                    </div>
                </div>

                

                <div className={styles.Bottom}>
                    <div className={styles.Bottom_Left}>
                        <h2 className={styles.left_div}>Beauty, Food, Toys & more..</h2> <br />
                        <button className={styles.view_bottom} onClick={toyMessage}>VIEW ALL</button>
                        {
                            toyMsg ? <ToysSection /> : null
                        }
                    </div>
                    <div className={styles.Bottom_Right}>
                        bottom right
                    </div>
                </div>
            </div>
    )
}


export default LoginPage