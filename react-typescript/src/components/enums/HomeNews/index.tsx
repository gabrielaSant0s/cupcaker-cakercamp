import News from 'components/atoms/News'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import apiNews from './apinews'

const HomeNews = (): JSX.Element => {
    const [dataNews,setDataNews] = useState([]);

    useEffect (()=>{
        apiNews.get("news").then(({data})=>{
            setDataNews(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(dataNews);
    
    const getDatasNews = ():JSX.Element[] => {
        return dataNews.map(item =>
            <News image={item["image"]}
            title={item["title"]}
            description={item["description"]}
            author={item["author"]}
            tags={item["tags"]}
            dateTime ={item["createdAt"]}
            type ={item["type"]}
            comments ={item["comments"]} />
        )
    }
    
    
    return (
      <div>
          {getDatasNews()}
      </div>
    )
  }
  
  export default HomeNews
  