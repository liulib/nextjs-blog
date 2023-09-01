import { FC } from 'react';

import { cn } from '@/lib/utils';
import { menu } from '@/config/menu';

interface MobileMenuProps {
    open: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ open }) => {
    return (
        <ul className={cn('md:hidden', { block: open }, { hidden: !open })}>
            {menu.map(item => {
                return (
                    <li
                        key={item.url}
                        className='group flex items-center gap-x-6 border-b border-dashed border-black/30 bg-gray-50 p-3 text-base font-semibold leading-7 text-gray-600 transition-colors hover:bg-gray-200 dark:border-slate-400/40 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
                    >
                        <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-black/10 bg-gray-100 shadow-md shadow-black/5 transition duration-200 group-hover:bg-gray-50 dark:border-white/10 dark:bg-slate-700 dark:shadow-slate-900/80  dark:group-hover:bg-slate-700'>
                            <item.icon className='h-6 w-6 text-gray-600 dark:text-slate-400' aria-hidden='true' />
                        </div>

                        {item.title}
                    </li>
                );
            })}
        </ul>
    );
};

export default MobileMenu;
