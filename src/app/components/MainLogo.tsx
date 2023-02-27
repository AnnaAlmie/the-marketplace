import Image from 'next/image';

export default function MainLogo() {
    const logo = "flex whitespace-nowrap"
    return (
        <h5 className={logo}>
            <Image src="/Storefront.svg"
                alt="NFT Marketplace" width={32}
                height={32} className="mr-2" />
            NFT Marketplace
        </h5>
    )
}