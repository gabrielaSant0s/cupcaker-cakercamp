import React from "react"
import Tag from "../Tag"
import TypeLabel from "../type-label"
import styles from './styles.module.scss'

const News = ({image="https://static.gamevicio.com/imagens_up/big/71/sonic-the-hedgehog-2-gerou-us-25-5-milhoes-em-seu-final-de-semana-internacional-070121.jpg"
                ,title="Sonic the Hedgehog 2 gerou US$ 25,5 milhões em seu final de semana internacional",
                description="Um aumento de 2% em comparação com a estreia do primeiro filme",
                author="Elta_Dickens12"
                }): JSX.Element => {
    return (
      <div className={styles.divCard}>
          <div className={styles.divImageTag}>
            <img src={image} className={styles.imageCard}/>
            <div className={styles.labelCard}><TypeLabel/></div>
          </div>
          <div className={styles.contentCard}>
                <h3 className={styles.titleCard}>{title}</h3>
                <h4 className={styles.descriptionCard}>{description}</h4>
                <div className={styles.rodapeCard}>
                    <div className={styles.divTags}><Tag/></div>
                    <div className={styles.divTags}><Tag type="Xbox One"/></div>
                    <p>Por <strong>{author}</strong>, 16 minutos atrás</p>
                </div>
          </div>
      </div>
    )
  }
  
  export default News
  