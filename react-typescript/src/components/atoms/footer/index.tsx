import React from 'react'
import styles from './styles.module.scss'



const Footer = (): JSX.Element => {

    return(
    <footer className={styles.footerWebSite} >
        <div className={styles.divOneFooter}>&copy; 2022 <p className={styles.pOneFooter}>GameVicio</p>. Todos os direitos reservados</div>
        <div className={styles.divTwoFooter}>Privacidade | Termos de Uso | Abuso |Contato</div>
        <div>Sobre a GameVicio | Regras | Equipe | Envie seu Conteúdo</div>
    </footer>
    )
}
export default Footer




