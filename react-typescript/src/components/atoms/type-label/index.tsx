import React from 'react'
import styles from './styles.module.scss'

const TypeLabel = ({label = "#GAMES"}): JSX.Element => {

return (
    <>

    <div>
        <div className={styles.etiqueta}>{label}</div>
    </div>

    </>
)

}

export default TypeLabel