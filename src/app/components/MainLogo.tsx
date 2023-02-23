import Image from 'next/image';

export default function MainLogo() {
    return (
        <h5 className="logo">
            <Image src="/Storefront.svg"
                alt="NFT Marketplace" width={32}
                height={32} />
            NFT Marketplace
        </h5>
    )
}