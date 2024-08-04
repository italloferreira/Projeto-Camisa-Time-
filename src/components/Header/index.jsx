import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../../img/logo.png'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
            <div>
                <p><img src={logo}></img></p>
            </div>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/brasileirao">Brasileirao</Link>
                <Link to="/selecao">Selecao</Link>
            </nav>
        </header>
    )    
}

export default Header
