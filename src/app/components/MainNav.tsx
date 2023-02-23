import Link from "next/link";

export default function MainNav() {
    return (
        <nav>
            <Link href={"/"}>Marketplace</Link>
            <Link href={"/"}>Rankings</Link>
            <Link href={"/"}>Connect a wallet</Link>
        </nav>
    )
}