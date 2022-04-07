import React from 'react'
import styles from './styles.module.scss'



const Tag = ({type = "PS4"}): JSX.Element => {

    let color=""
    switch (type){
        case  "PS4":
            color = "#1565c0"
            break
        case "PS5":
            color = "#1565c0"
            break
        case "Xbox Series":
            color = "#529836"
            break
        case "Xbox One":
            color = "#529836"
            break
        case "PC":
            color = "#BDBBBB"
            break
        case "Switch":
            color = "#c62828"
            break
        case "default":
            color = "#ef6c00"
            break       
    }
    
    
    return(
    <>
        <span className={styles.cardTag} style={{backgroundColor: color}}>{type}</span>
        
    </>
    )
}
export default Tag