import MainLogo from "./MainLogo";
import MainNav from "./MainNav";
import SubscriptionInput from "./SubscriptionInput";
import styles from './footer.module.scss'

export default function Footer() {
    const mt_h5 = "mobile:mt-8 tablet:mt-8";

    return (
        <footer className={styles.footer}>
            <div className="wrapper">
                <div className={styles.footer_cols}>
                    <div>
                        <MainLogo />
                        <p>NFT marketplace UI created with Anima for Figma.</p>
                        <p>Join our community</p>
                        <div>
                            {/* :TODO  social icons*/}
                            social icons</div>
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