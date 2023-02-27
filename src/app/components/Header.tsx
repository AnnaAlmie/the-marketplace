import MainNav from "./MainNav";
import MainLogo from "./MainLogo";
import styles from './header.module.scss';

export default function Header() {
    return (
        <header className={`${styles.header} wrapper`}>
            <MainLogo />
            <div className={styles.header_menu}>
                <MainNav />
                <button className="btn_active">Sign Up</button>
            </div>
        </header>
    )
}