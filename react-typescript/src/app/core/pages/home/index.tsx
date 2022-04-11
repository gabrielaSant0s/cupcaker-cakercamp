import React from 'react'
import logo from 'app/core/resources/logo.svg'
import styles from './styles.module.scss'
import TypeLabel from 'components/atoms/type-label'
import Stories from 'components/atoms/Stories'
import Footer from 'components/atoms/footer'
import Tag from 'components/atoms/Tag'
import Header from 'components/atoms/header'
import News from 'components/atoms/News'

const Home = (): JSX.Element => {
  return (
    <main>
      <News tags={["PS5","Xbox One"]}/>
      
     
    </main>
  )
}

export default Home
