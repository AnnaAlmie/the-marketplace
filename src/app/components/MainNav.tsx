import Link from "next/link";

export default function MainNav() {
    const links = [
        {
            title: "Marketplace",
            link: "/"
        },
        {
            title: "Rankings",
            link: "/"
        },
        {
            title: "Connect a wallet",
            link: "/"
        },
    ]
    return (
        <nav>
            {
                links.map(link => {
                    return <Link href={link.link} key={link.title} className="whitespace-nowrap">{link.title}</Link>
                })
            }
        </nav>
    )
}