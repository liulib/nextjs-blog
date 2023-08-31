import { FC } from 'react';

interface LightIconAttributes {
    className?: string;
}

const LightIcon: FC<LightIconAttributes> = ({ className = '' }: LightIconAttributes) => {
    return (
        <svg
            width='24'
            height='24'
            fill='none'
            aria-hidden='true'
            className={'text-gray-400 transition-transform duration-500'}
        >
            <path
                d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                fill='currentColor'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            ></path>
            <path
                d='M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            ></path>
        </svg>
    );
};

export default LightIcon;
