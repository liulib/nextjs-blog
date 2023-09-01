'use client';

import { useTheme } from 'next-themes';

import Light from '@/icons/light';
import Dark from '@/icons/dark';

export default function Toggle() {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        theme === 'light' && setTheme('dark');
        theme === 'dark' && setTheme('light');
    };

    return (
        <div className='cursor-pointer hover:bg-slate-100 rounded-sm hidden md:block' onClick={changeTheme}>
            {theme === 'light' && <Light></Light>}
            {theme === 'dark' && <Dark></Dark>}
        </div>
    );
}
