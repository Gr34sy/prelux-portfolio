//styles
import styles from '../styles/scss/components/navbar.module.scss';

//images
import logo from '../assets/images/logo.png';

//components
import Image from 'next/image';

export function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Image src={logo} width={60} height={60} alt="Prelux logo"/>
        </nav>
    )
}