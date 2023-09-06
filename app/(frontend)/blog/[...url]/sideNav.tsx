'use client';
import { useEffect, useState } from 'react';

import { generateTitles } from '@/lib/utils';
import { ISideTitle } from '@/types';

const SideNav = () => {
    const [navs, setNavs] = useState<ISideTitle[]>([]);

    // 点击侧边栏跳转到指定位置
    const handleAnchorClick = (anchor: ISideTitle) => {
        const { lineIndex } = anchor;
        const markdownDom = document.getElementById('markdown-dom');
        const heading = markdownDom?.querySelector(`[custom-line="${lineIndex}"]`);
        heading?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        const markdownDom = document.getElementById('markdown-dom');
        const titles = generateTitles(markdownDom);
        setNavs(titles);
    }, []);

    return (
        <div className='bg-white hidden xl:block sticky top-[20vh] max-h-[60vh] overflow-y-auto rounded-xl w-48 border border-dashed no-scrollbar p-4'>
            {navs.map(nav => {
                return (
                    <div
                        key={nav.lineIndex}
                        title={nav.title}
                        className='cursor-pointer hover:text-blue-500 dark:hover:text-sky-500 truncate text-base text-slate-600 dark:text-slate-400'
                        style={{ padding: `0.25rem 0 0.25rem ${nav.indent * 1}rem` }}
                        onClick={() => {
                            handleAnchorClick(nav);
                        }}
                    >
                        {nav.title}
                    </div>
                );
            })}
        </div>
    );
};

export default SideNav;
