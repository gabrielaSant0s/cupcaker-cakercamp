import React from 'react'
import logo from 'app/core/resources/logo.svg'
import styles from './styles.module.scss'
import TypeLabel from 'components/atoms/type-label'
import Stories from 'components/atoms/Stories'
import Footer from 'components/atoms/footer'
import Tag from 'components/atoms/Tag'
import Header from 'components/atoms/header'
import News from 'components/atoms/News'
import HomeCarousel from 'components/atoms/carousel'

const Home = (): JSX.Element => {
  return (
    <main>
      <HomeCarousel/>
      
     
    </main>
  )
}

export default Home
