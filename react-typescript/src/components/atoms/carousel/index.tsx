import React from 'react'
import styles from './styles.module.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import TypeLabel from '../type-label';

interface IData {
    title: string
    description: string
    imageURL: string
    type: string
}

export interface IHomeCarousel {
    items?: IData[]
}

const HomeCarousel = ({
    
    items = [{
        title: "Sonic the Hedgehog 2 gerou US$ 25,5 milhões em seu final de semana internacional",
        description: "Um aumento de 2% em comparação com a estreia do primeiro filme",
        imageURL: "https://static.gamevicio.com/imagens_up/big/71/sonic-the-hedgehog-2-gerou-us-25-5-milhoes-em-seu-final-de-semana-internacional-070121.jpg",
        type:"Cinema",
    },
    {
        title: "Vaza lista com próximos jogos chegando ao catálogo do Xbox Game Pass",
        description:"Vários jogos estão entrando nessa primeira quinzena de abril",
        imageURL: "https://static.gamevicio.com/imagens_up/big/71/vaza-lista-com-proximos-jogos-chegando-ao-catalogo-do-xbox-game-pass-070119.jpg",
        type: "Games"
    },
    {
        title: "Encare as profundezas amaldiçoadas de um pesadelo em Nightmare Reaper",
        description:"FPS de inspiração retrô que mistura loot-shooter com rogue-lite rompe a parede entre a jogabilidade clássica e moderna.",
        imageURL: "https://static.gamevicio.com/imagens_up/big/71/encare-as-profundezas-amaldicoadas-de-um-pesadelo-em-nightmare-reaper-070117.jpg",
        type: "Indie"
    },
    {
        title: "Activision Blizzard atualiza número de estúdios trabalhando em jogos de Call of Duty",
        description:"Digital Legends e Solid State Studios foram acrescentadas ao já enorme número de estúdios trabalhando na franquia",
        imageURL: "https://static.gamevicio.com/imagens_up/big/71/activision-blizzard-atualiza-numero-de-estudios-trabalhando-em-jogos-de-call-of-duty-070115.jpg",
        type: "Games"
    },
    {
        title: "Xbox estaria preparando um evento para junho nos moldes da E3, afirma Jeff Grubb",
        description:"Com o cancelamento da E3 2022, Microsoft estaria preparando evento próprio.",
        imageURL: "https://static.gamevicio.com/imagens_up/big/71/xbox-estaria-preparando-um-evento-para-junho-nos-moldes-da-e3-afirma-jeff-grubb-070112.jpg",
        type: "Games"
    }]
}: IHomeCarousel): JSX.Element => {

    const getItems = ():JSX.Element[] => {
        return items.map(item =>  
            <SplideSlide className={styles.divImageCarousel}>
                <div><a><TypeLabel label={item.type}/></a></div>
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