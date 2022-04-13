import Stories from 'components/atoms/Stories'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import apiImage from 'components/atoms/Stories/apiImage'


const SectionStories = (): JSX.Element => {

    const [dataStories,setDataStories] = useState([]);

    useEffect (()=>{
        apiImage.get("stories").then(({data})=>{
            setDataStories(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const getDatas = ():JSX.Element[] => {
        return dataStories.map(item =>
            <Stories image={item["image"]} title={item["title"]}/>
        )
    }

    return (
      <div className={styles.divStories}>
          {getDatas()}
      </div>
    )
  }
  
  export default SectionStories