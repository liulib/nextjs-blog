import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { remark } from 'remark';
import html from 'remark-html';

import { ISideTitle } from '@/types';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const fetcher = <T>(url: string): Promise<T> => fetch(url).then(res => res.json());

export const markdownToHtml = async (markdown: string) => {
    const result = await remark().use(html).process(markdown);
    return result.toString();
};

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

/*
 * @Des          : 查找传进来的DOM节点下的h标题，用于生成侧边导航
 * @Author       : liulib
 * @Date         : 2021-10-21 13:51:42
 */
export const generateTitles: (dom: HTMLElement | null) => ISideTitle[] = dom => {
    let resultList: ISideTitle[] = [];

    // 没有dom 返回空数组
    if (dom === null) return resultList;

    const anchors = dom.querySelectorAll<HTMLElement>('h1,h2,h3,h4,h5,h6');
    const titles = Array.from(anchors).filter(title => !!title.innerText.trim());

    // 没有标题 返回空数组
    if (!titles.length) {
        resultList = [];
        return resultList;
    }

    // 提取标签名排序 到时候用这个数组的下标来确定缩进
    const hTags = Array.from(new Set(titles.map(title => title.tagName))).sort();

    // 给所有h标签添加自定义属性 以及scroll-margin-top
    titles.forEach((el, index) => {
        el.setAttribute('custom-line', String(index));
        el.style.scrollMarginTop = '100px';
    });

    // 拼装数据
    resultList = titles.map((el, index) => ({
        title: el.innerText,
        lineIndex: index,
        indent: hTags.indexOf(el.tagName),
    }));

    return resultList;
};
