import { FC } from 'react';

interface DarkIconAttributes {
    className?: string;
}

const DarkIcon: FC<DarkIconAttributes> = ({ className = '' }: DarkIconAttributes) => {
    return (
        <svg
            width='24'
            height='24'
            fill='none'
            aria-hidden='true'
            className={'ml-3.5 text-gray-400 transition-transform duration-500'}
        >
            <path
                d='M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z'
                fill='currentColor'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            ></path>
        </svg>
    );
};

export default DarkIcon;
