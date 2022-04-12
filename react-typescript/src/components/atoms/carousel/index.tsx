import React from 'react'
import styles from './styles.module.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import TypeLabel from '../type-label';

interface IData {
    title: string
    description: string
    imageURL: string
}

export interface IHomeCarousel {
    items?: IData[]
}

const HomeCarousel = ({
    
    items = [{
        title: 'Vaza lista com próximos jogos chegando ao catálogo do Xbox Game Pass',
        description: 'Vários jogos estão entrando nessa primeira quinzena de abril',
        imageURL: 'https://static.gamevicio.com/imagens_up/big/71/xbox-live-gold-pode-estar-chegando-ao-fim-070100.jpg'
    },
    {
        title: 'Cheesecake Labs a empres do futuro',
        description: 'Venha trabalhar conosco!',
        imageURL: 'https://static.gamevicio.com/imagens_up/big/71/quando-chega-a-parte-final-de-shingeki-no-kyojin-070099.png'
    }]
}: IHomeCarousel): JSX.Element => {

    const getItems = ():JSX.Element[] => {
        return items.map(item =>  
            <SplideSlide className={styles.divImageCarousel}>
                <div><a><TypeLabel/></a></div>
                <img src={item.imageURL} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </SplideSlide> )
    }

    return(
        <>
        <Splide options={ { rewind: true, autoplay: true, interval:5000} } className={styles.divCarousel}>
            {getItems()}   
        </Splide>
       </>
    )
}

export default HomeCarousel