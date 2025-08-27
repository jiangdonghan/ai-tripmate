import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const menuOptions = [{
    name: 'Home',
    href: '/',
}, {
    name: 'Pricing',
    href: '/pricing',
}, {
    name: 'Contact us',
    href: '/contact',
}]

function Header() {
  return (
    <div className='flex items-center justify-between p-4'>
        <div className='flex items-center gap-2'>
            <Image src="/logo.svg" alt="logo" width={30} height={30} />
            <h2 className='text-2xl font-bold'>TripMate AI</h2>
        </div>
        <div className='flex items-center gap-8'>
            {menuOptions.map((option) => (
                <Link href={option.href}>
                    <h2 className='text-lg hover:scale-105 transition-all duration-300'>{option.name}</h2>
                </Link>
            ))}
        </div>
        <Button className='text-white cursor-pointer'>Get Started With Us</Button>
    </div>
  )
}

export default Header