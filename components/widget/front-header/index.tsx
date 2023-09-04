'use client';
import { useState } from 'react';

import Logo from './logo';
import Toggle from './toggle';
import DesktopNav from './desktop-nav';
import MobileMenuButton from './mobile-menu-button';
import MobileMenu from './mobile-menu';
import { cn } from '@/lib/utils';

export default function FrontHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className='sticky top-0 bg-gray-50 shadow-sm shadow-gray-300 z-10'>
            <nav
                className={cn('mx-auto max-w-7xl flex items-center justify-between px-4 py-4', {
                    'md:border-none border-b border-dashed border-black/30': open,
                })}
            >
                <Logo></Logo>

                <DesktopNav></DesktopNav>

                <Toggle></Toggle>

                <MobileMenuButton open={open} setOpen={setOpen}></MobileMenuButton>
            </nav>

            <MobileMenu open={open}></MobileMenu>
        </header>
    );
}
