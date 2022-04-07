import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import apiImage from './apiImage'

const Stories = ({image="https://static.gamevicio.com/imagens_up/big/71/novo-operador-de-call-of-duty-e-brasileiro-070017.jpg",title="O público gostou de Cavaleiro da Lua"}): JSX.Element => {
    const [imagens,setImagens] = useState([]);

    useEffect(()=>{
        apiImage.get("stories").then(({data})=>{
            setImagens(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // function links(): JSX.Element[]{
    //      return imagens.map((imagemAtual) => {
    //         const linkImagem = <img className={styles.imageStories} src={imagemAtual["image"]}/>
    //         return linkImagem
    //     })
    // }
       

    
    return(
    <>
    {/* <div className={styles.divImageStories}>   
        {links()}
    </div> */}
    <div className={styles.cardStorie}>
        <div className={styles.divImageStories}>
            <img className={styles.imageStories}
                src={image}/>
        </div>
        <p className={styles.titleStorie}>{title}</p>
    </div>
    

    </>
    )
}
export default Stories