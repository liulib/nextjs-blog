import Link from 'next/link';
import Image from 'next/image';
import {
    CalendarDaysIcon as DateIcon,
    TagIcon,
    EyeIcon,
    Bars3Icon as CategrayIcon,
    ChatBubbleOvalLeftIcon as ChatIcon,
} from '@heroicons/react/24/outline';

import { BaseResponse } from '@/types';
import { IQueryArticleListRes } from '@/types/api';
import { fetcher } from '@/lib/utils';
import { TimeFormat } from '@/lib/timeFormat';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default async function Blog() {
    const {
        data: { list },
    } = await fetcher<BaseResponse<IQueryArticleListRes>>(
        'https://www.vvvv.plus/api/article/getList?page=1&pageSize=100&isDelete=0',
    );

    return (
        <div className='max-w-5xl mx-auto pt-12'>
            <div className='relative mx-auto max-w-4xl border-b border-dashed border-slate-500/50 px-6 py-4 md:border-y'>
                <div className='absolute -top-1.5 left-0 h-2 w-full bg-gradient-to-r from-white from-20% via-white/5 to-white to-80% dark:from-slate-800 dark:from-20% dark:via-slate-800/5 dark:to-slate-800 dark:to-80%'></div>
                <div className='absolute -bottom-1.5 left-0 h-2 w-full bg-gradient-to-r from-white from-10% via-white/5 to-white to-90% dark:from-slate-800 dark:from-10% dark:via-slate-800/5 dark:to-slate-800 dark:to-90%'></div>

                <h1 className='mx-auto text-center font-calsans text-3xl tracking-tight text-slate-900 dark:text-slate-100'>
                    Blog
                </h1>
            </div>

            <div className='relative mx-auto max-w-4xl px-6 py-4'>
                <span className='mb-4 block text-center text-lg leading-8 text-slate-600 dark:text-slate-500'>
                    一些博文
                </span>
            </div>

            <div className='lg:mt-15 mt-10 space-y-5 lg:space-y-5'>
                {list.map(blog => {
                    return (
                        <div
                            key={blog.id}
                            className='relative w-full rounded-2xl bg-white/20 p-2.5 shadow-sm shadow-black/5 ring-[0.8px] ring-black/5 dark:bg-white/5 dark:shadow-white/5 dark:ring-white/10'
                        >
                            <div className='absolute -inset-0.5 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 opacity-[0.15] blur-lg dark:from-sky-500 dark:to-sky-600'></div>

                            <div className='relative max-w-full rounded-[0.62rem] bg-white shadow-sm  shadow-black/5 ring-[0.8px] ring-black/5 hover:bg-gray-50 dark:bg-slate-800 dark:shadow-white/5 dark:ring-white/10 dark:hover:bg-slate-900/50'>
                                <div className='group mx-auto p-5'>
                                    <Link
                                        href={`blog/${blog.id}`}
                                        className='relative isolate flex flex-col gap-8 lg:flex-row'
                                    >
                                        <div className='lg:aspect-[2/1] relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0'>
                                            <Image
                                                src={'https://blog-1252028952.cos.ap-nanjing.myqcloud.com/wasm.png'}
                                                fill={true}
                                                alt={blog.title}
                                                className='absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover'
                                            />
                                            <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
                                        </div>

                                        <div>
                                            <div className='group relative max-w-xl'>
                                                <h3 className='mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-slate-400'>
                                                    {blog.title}
                                                </h3>
                                                <p className='mt-5 text-sm leading-6 text-slate-600'>{blog.brief}</p>
                                            </div>
                                            <div className='mt-6 flex flex-wrap border-t border-black/5 pt-6 dark:border-white/10'>
                                                <div className='mr-2 flex items-center text-sm leading-6 text-slate-500'>
                                                    <DateIcon className='h-5 w-5 text-slate-500' />

                                                    <span className='ml-1'>
                                                        {TimeFormat.getExpectFormat(blog.createdAt, {
                                                            format: 'YYYY-MM-DD',
                                                            isUtc: true,
                                                        })}
                                                    </span>
                                                </div>

                                                <div className='mr-2 flex items-center text-sm leading-6 text-slate-500'>
                                                    <ChatIcon className='h-5 w-5 text-slate-500' />
                                                    <span className='ml-1'>{blog.commentCount}</span>
                                                </div>

                                                <div className='mr-2 flex items-center text-sm leading-6 text-slate-500'>
                                                    <EyeIcon className='h-5 w-5 text-slate-500' />
                                                    <span className='ml-1'>{blog.viewCount}</span>
                                                </div>

                                                <div className='mr-2 flex items-center text-sm leading-6 text-slate-500'>
                                                    <CategrayIcon className='h-5 w-5 text-slate-500' />
                                                    <span className='ml-1'>{blog.category.categoryName}</span>
                                                </div>

                                                <div className='flex items-center text-sm leading-6 text-slate-500'>
                                                    <TagIcon className='h-5 w-5 text-slate-500' />
                                                    {blog.tags.map(tag => {
                                                        // const color = `bg-[${tag.tagColor}]`;
                                                        return (
                                                            <>
                                                                <Badge className='mr-1'>{tag.tagName}</Badge>
                                                            </>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
