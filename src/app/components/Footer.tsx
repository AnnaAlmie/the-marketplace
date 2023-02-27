import MainLogo from "./MainLogo";
import MainNav from "./MainNav";
import SubscriptionInput from "./SubscriptionInput";
import styles from './footer.module.scss';
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord';
import { FiYoutube } from '@react-icons/all-files/fi/FiYoutube';
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';

export default function Footer() {
    const mt_h5 = "mobile:mt-8 tablet:mt-8";
    const icons = [
        {
            icon: <FaDiscord />,
            link: 'https://discord.com/'
        },
        {
            icon: <FiYoutube />,
            link: 'https://www.youtube.com/'
        },
        {
            icon: <FiTwitter />,
            link: 'https://twitter.com/'
        },
        {
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/'
        }
    ]
    return (
        <footer className={styles.footer}>
            <div className="wrapper">
                <div className={styles.footer_cols}>
                    <div>
                        <MainLogo />
                        <p>NFT marketplace UI created with Anima for Figma.</p>
                        <p>Join our community</p>
                        <div className="flex">
                            {
                                icons.map((icon: any) => {
                                    return <a className="w-8 h-8 mr-3" href={icon.link} target="_blank" rel="noopener noreferrer">{icon.icon}</a>
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.footer_nav}>
                        <h5 className={mt_h5}>Explore</h5>
                        <MainNav />
                    </div>
                    <div>
                        <h5 className={mt_h5}>Join our weekly digest</h5>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                        <SubscriptionInput />
                    </div>
                </div>
                <hr className="my-7" />
                <p><small>Ⓒ NFT Market. Use this template freely.</small></p>
            </div>
        </footer>
    )
}