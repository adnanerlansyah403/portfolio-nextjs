/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import ImageProfile from "../public/images/AdnanErlansyah.png"
import Link from 'next/link';
import { PageInfo } from './../typing.d';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo;
}

export default function Hero({pageInfo}: Props) {
    
    const [text, count] = useTypewriter({
        words: [
            `Hi, The name's ${pageInfo?.name || "Adnan Erlansyah"}`,
            "I'm from indonesian",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='relative top-14 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img 
                className='relative rounded-full h-32 w-32 mx-auto object-cover' 
                src={urlFor(pageInfo?.heroImage).url()}
                alt="Adnan Erlansyah" 
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[13px]'>
                    {pageInfo?.role}
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7ABDA" />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>About</button>
                    </Link>
                    <Link href="#experince">
                        <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Experince</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}