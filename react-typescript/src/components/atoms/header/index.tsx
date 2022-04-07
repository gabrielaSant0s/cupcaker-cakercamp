import React from 'react'
import styles from './styles.module.scss'
import {WiMoonWaxingCrescent3} from 'react-icons/wi'


const Header = (): JSX.Element => {

    return(
    <>

    <div >
        <img className={styles.divLogo} src='https://www.gamevicio.com/misc/images/logo-black.webp'/>
    </div>
    <div className={styles.divContentHeader}> 
        <button className={styles.buttonHeader}><WiMoonWaxingCrescent3 className={styles.moonHeader}/></button>
    
    </div>
    
    </>
    )
}
export default Header