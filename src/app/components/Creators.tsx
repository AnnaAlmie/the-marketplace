'use client';
import { supabase } from '@/utils/supabaseClient';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type ICreator = {
    id: number
    rate: number
    name: string
    change: string
    sold: number
    volume: number
}

export default function Creators() {
    let [creators, setCreators] = useState<any[]>([]);

    useEffect(() => {
        getCreators()
    }, []);

    async function getCreators() {
        try {
            const { data, error } = await supabase
                .from('crypto')
                .select()
            if (error) { throw error }
            setCreators(data);

        } catch (error) {
            alert('Error loading creators data!')
            console.log("🚀 ~ file: Creators.tsx:20 ~ getCreators ~ error:", error)
        }
    }

    return (
        <section className='wrapper'>
            <h2>Top Creators</h2>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
            <div className='grid grid-cols-4 my-12 gap-7'>
                {
                    !creators.length &&
                    <div>loading...</div>
                }
                {
                    creators.sort((a, b) => a.rate - b.rate).slice(0, 12).map(item => {
                        return <div key={item.id} className="rounded-[20px] border p-5 text-center relative">
                            <span className='absolute top-5 left-5'>{item.rate}</span>
                            <Image
                                className='mx-auto rounded-full'
                                src={`/images/avatars/${item.id}.png`}
                                alt="Picture of the author"
                                width={120}
                                height={120}
                            />
                            <div className='truncate font-bold mt-5 mb-1'>{item.name}</div>
                            <div>Total Sales: {item.volume} ETH</div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}
