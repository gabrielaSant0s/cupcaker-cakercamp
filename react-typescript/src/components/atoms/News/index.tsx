import React from "react"
import Tag from "../Tag"
import TypeLabel from "../type-label"
import styles from './styles.module.scss'
import moment from "moment"
import { FaCommentAlt } from 'react-icons/fa';


const News = ({image="https://static.gamevicio.com/imagens_up/big/71/sonic-the-hedgehog-2-gerou-us-25-5-milhoes-em-seu-final-de-semana-internacional-070121.jpg"
                ,title="Sonic the Hedgehog 2 gerou US$ 25,5 milhões em seu final de semana internacional",
                description="Um aumento de 2% em comparação com a estreia do primeiro filme",
                author="Elta_Dickens12",
                tags=["Xbox One"],
                dateTime = "2022-04-10T09:00:46.272Z",
                type= "GAMES",
                comments="10"
                }): JSX.Element => {
  
  const momentDate = moment(dateTime).fromNow()
  let newMomentDate = ""
   if (momentDate == "há um dia"){
    newMomentDate = "Ontem"
  } else if(momentDate == "há 2 dias"){
    newMomentDate = "Anteontem"
  }else{
    newMomentDate = momentDate
  }
  
    return (
      <div className={styles.divCard}>
          <div className={styles.divImageTag}>
            <img src={image} className={styles.imageCard}/>
            <div className={styles.labelCard}><TypeLabel label={type}/></div>
          </div>
          <div className={styles.contentCard}>
            <div className={styles.divTextContent}>
                <h3 className={styles.titleCard}>{title}</h3>
                <h4 className={styles.descriptionCard}>{description}</h4>
            </div>
                <div className={styles.rodapeCard}>
                   <div className={styles.tagText}> 
                    <div className={styles.divTags}>
                    {tags.map((tagAtual) => (
                      <div><Tag type={tagAtual}/></div>
                      ))}
                    </div>
                    <p>Por <strong>{author}</strong>, {newMomentDate}</p>
                    </div>
                    <a>{comments}<FaCommentAlt/></a>
                </div>
          </div>
      </div>
    )
  }
  
  export default News
  