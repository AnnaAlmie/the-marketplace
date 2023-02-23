import MainLogo from "./MainLogo";
import MainNav from "./MainNav";
import SubscriptionInput from "./SubscriptionInput";

export default function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div>
                    <div>
                        <MainLogo />
                        <p>NFT marketplace UI created with Anima for Figma.</p>
                        <p>Join our community</p>
                        <div>social icons</div>
                    </div>
                    <div>
                        <h5>Explore</h5>
                        <MainNav />
                    </div>
                    <div>
                        <h5>Join our weekly digest</h5>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                        <SubscriptionInput />
                    </div>
                </div>
                <hr />
                <p><small>Ⓒ NFT Market. Use this template freely.</small></p>
            </div>
        </footer>
    )
}