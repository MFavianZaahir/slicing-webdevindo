import Image from 'next/image'
import React from 'react'
import { socialMedia } from '@/data/socialMedia'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='bg-[#0F0F0F]'>
            <div className='container mx-auto px-[70px] py-10 '>
                <div className='flex flex-col lg:flex-row justify-between items-center md:flex-row md:justify-between gap-[15px] py-[50px]'>
                    <div className='mb-4'>webdevindo©Copyright 2023</div>
                    <div className='socmed flex justify-end items-center gap-[12px] py-[50px]'>
                        <a href='#'>
                            <Image src={fb} alt="fb" />
                        </a>
                        <a href='#'>
                            <Image src={telegram} alt="fb" />
                        </a>
                        <a href='#'>
                            <Image src={twitter} alt="fb" />
                        </a>
                        <a href='#'>
                            <Image src={linkedin} alt="fb" />
                        </a>
                    </div>
                    {/* <div className='flex flex-row gap-4'>
                        {socialMedia.map((soc, i) => {
                            return <Link key={i} href={soc.url}>
                                <div className="relative w-8 h-8 px-[10px] py-[10px] bg-white rounded-md hover:bg-[#045EE1]">
                                    <Image className='px-2' src={soc.src} alt={soc.src} fill />
                                </div>
                            </Link>
                        })}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer