import React from 'react'
import logo from 'app/core/resources/logo.svg'
import styles from './styles.module.scss'
import TypeLabel from 'components/atoms/type-label'
import Stories from 'components/atoms/Stories'

const Home = (): JSX.Element => {
  return (
    <main>
      <header className={styles.header}>
        <TypeLabel/>
      </header>
      <Stories/>
    </main>
  )
}

export default Home
