import React from 'react'
import logo from 'app/core/resources/logo.svg'
import styles from './styles.module.scss'
import TypeLabel from 'components/atoms/type-label'
import Stories from 'components/atoms/Stories'
import Footer from 'components/atoms/footer'
import Tag from 'components/atoms/Tag'
import Header from 'components/atoms/header'

const Home = (): JSX.Element => {
  return (
    <main>
      <Stories/>
      <Header/>
     
    </main>
  )
}

export default Home
