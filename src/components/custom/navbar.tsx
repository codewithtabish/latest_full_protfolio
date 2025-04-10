import React from 'react'
import Image from 'next/image';
import HeaderRightSide from './header-right';



const Header = () => {
    return (
        <div className='flex flex-row justify-between mt-5  md:max-w-4xl mx-auto items-center p-4 absolute -top-28 left-0 right-0'>
            <Image
                src={'/images/logo-2.png'}
                alt='header logo'
                width={250}
                height={150}
                className='object-cover'
                priority
            />
            <HeaderRightSide />


        </div>
    )
}

export default Header
