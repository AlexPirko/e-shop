'use client';
import Link from 'next/link';
import Image from 'next/image';

import Nav from './Nav';
import NavMobile from './NavMobile';
import { Button } from '@/components/ui/button';
import { Search, ShoppingBag } from 'lucide-react';

const Header = () => {
    return (
        <header className='shadow-sm'>
            <div className='container flex justify-between px-4 py-2'>
                <div className='flex items-center gap-8'>
                    <NavMobile
                        containerStyles='lg:hidden'
                        iconStyles='text-3xl text-white'
                        linkStyles='uppercase text-white cursor-pointer'
                    />
                    <div className='flex xl:gap-6'>
                        <Link href='/'>
                            <Image
                                src='/logo.png'
                                width={125}
                                height={70}
                                alt='logo'
                            />
                        </Link>
                        <Nav
                            containerStyles='hidden lg:flex items-center text-dark/80 font-semibold border-0'
                            linkStyles='capitalize ml-10 cursor-pointer'
                        />
                    </div>
                </div>
                <div className='flex gap-8 items-center'>
                    <div className='hidden md:flex gap-3 items-center border rounded-full p-2 px-5'>
                        <Search />
                        <input
                            type='text'
                            placeholder='Що ти шукаєшь?'
                        />
                    </div>
                    <Button>Login</Button>
                    <div className='flex gap-2 item-center font-lg'>
                        <ShoppingBag />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
