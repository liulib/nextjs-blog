'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

import Light from '@/icons/light';
import Dark from '@/icons/dark';

export default function Toggle() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        console.log('-----------');
        console.log(theme);
    }, [theme]);

    return (
        <div className='cursor-pointer hover:bg-slate-100 rounded-sm hidden md:block'>
            <Light></Light>
        </div>
    );
}
