import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const fetcher = <T>(url: string): Promise<T> => fetch(url).then(res => res.json());

/**
 * 对数组进行分组
 * @param {Array} arr - 分组对象
 * @param {Function} f
 * @returns 数组分组后的新数组
 */
export const groupBy = (arr: any[], func: Function) => {
    const groups: any = {};
    arr.forEach(item => {
        const group = JSON.stringify(func(item));
        groups[group] = groups[group] || [];
        groups[group].push(item);
    });
    return Object.keys(groups).map(group => groups[group]);
};
