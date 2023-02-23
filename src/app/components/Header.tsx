import MainNav from "./MainNav";
import MainLogo from "./MainLogo";

export default function Header() {
    return (
        <header>
            <div className="wrapper">
                <MainLogo />
                <MainNav />
                <button>Sign Up</button>
            </div>
        </header>
    )
}