import MainNav from "./MainNav";
import MainLogo from "./MainLogo";
import styles from './header.module.scss';
import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser';

export default function Header() {
    return (
        <header className={`${styles.header} wrapper`}>
            <MainLogo />
            <div className={styles.header_menu}>
                <MainNav />
                <button className="btn_active">
                    <span><AiOutlineUser /></span>
                    Sign Up</button>
            </div>
        </header>
    )
}