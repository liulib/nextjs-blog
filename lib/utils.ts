import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const fetcher = <T>(url: string): Promise<T> => fetch(url).then(res => res.json());
