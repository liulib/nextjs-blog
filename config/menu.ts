import { Menu } from '@/types';

import Home from '@/icons/home';
import Archive from '@/icons/archive';
import Blog from '@/icons/blog';
import About from '@/icons/about';
// import Resume from '@/icons/resume';

export const menu: Menu[] = [
    {
        title: 'Home',
        url: '/',
        idx: 1,
        icon: Home,
    },
    {
        title: 'Archive',
        url: '/archive',
        idx: 2,
        icon: Archive,
    },
    {
        title: 'Blog',
        url: '/blog',
        idx: 3,
        icon: Blog,
    },
    {
        title: 'About',
        url: '/about',
        idx: 4,
        icon: About,
    },
    // {
    //     title: 'Resume',
    //     url: '/resume',
    //     idx: 5,
    //     icon: Resume,
    // },
];
