import Link from 'next/link';

import { BaseResponse } from '@/types';
import { IQueryArticleListRes, IArticle, IArticleTree } from '@/types/api';
import { fetcher, groupBy } from '@/lib/utils';

const Archive = async () => {
    const {
        data: { list },
    } = await fetcher<BaseResponse<IQueryArticleListRes>>(
        'https://www.vvvv.plus/api/article/getList?page=1&pageSize=100&isDelete=0',
    );

    const blogList: any = groupBy(list, (item: IArticle) => item.createdAt.slice(0, 4));
    return (
        <div className='max-w-5xl mx-auto pt-12'>
            <div className='relative mx-auto max-w-4xl border-b border-dashed border-slate-500/50 px-6 py-4 md:border-y'>
                <div className='absolute -top-1.5 left-0 h-2 w-full bg-gradient-to-r from-white from-20% via-white/5 to-white to-80% dark:from-slate-800 dark:from-20% dark:via-slate-800/5 dark:to-slate-800 dark:to-80%'></div>
                <div className='absolute -bottom-1.5 left-0 h-2 w-full bg-gradient-to-r from-white from-10% via-white/5 to-white to-90% dark:from-slate-800 dark:from-10% dark:via-slate-800/5 dark:to-slate-800 dark:to-90%'></div>

                <h1 className='mx-auto text-center font-calsans text-3xl tracking-tight text-slate-900 dark:text-slate-100'>
                    Archive
                </h1>
            </div>

            <div className='relative mx-auto max-w-4xl px-6 py-4'>
                <span className='mb-4 block text-center text-lg leading-8 text-slate-600 dark:text-slate-500'>
                    Nice! {list.length} posts in total. Keep on posting.
                </span>
            </div>

            {blogList.map((item: IArticleTree[]) => {
                return (
                    <>
                        <div className='relative mx-auto max-w-xl mt-4'>
                            {/* <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                                <div className='h-[1px] w-full bg-gradient-to-r from-white via-slate-500/50 to-white opacity-80 dark:from-slate-800 dark:via-white/20 dark:to-slate-800'></div>
                            </div> */}
                            <div className='relative'>
                                <div className='inline-flex items-center rounded-lg bg-white px-4 py-1.5 text-sm font-medium leading-5 text-slate-500 ring-transparent dark:bg-slate-800 '>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'>
                                        <g
                                            strokeWidth='1'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        >
                                            <line x1='0.5' y1='5.5' x2='15.5' y2='5.5'></line>
                                            <path d='M14,2.5H2A1.5,1.5,0,0,0,.5,4v9A1.5,1.5,0,0,0,2,14.5H14A1.5,1.5,0,0,0,15.5,13V4A1.5,1.5,0,0,0,14,2.5Z'></path>
                                            <line x1='4.5' y1='0.5' x2='4.5' y2='2.5'></line>
                                            <line x1='11.5' y1='0.5' x2='11.5' y2='2.5'></line>
                                        </g>
                                    </svg>
                                    <span className='ml-1.5'>{item[0]['createdAt'].slice(0, 4)}</span>
                                </div>
                            </div>
                        </div>

                        {item.map(blog => {
                            return (
                                <Link href={`blog/${blog.id}`} className='relative mx-auto max-w-xl mt-4 block'>
                                    <span className='inline-flex items-center rounded-lg bg-white px-4 py-1.5 text-sm font-medium leading-5 text-slate-500 ring-transparent dark:bg-slate-800 hover:text-blue-500 dark:hover:text-sky-500'>{`${blog.createdAt.slice(
                                        5,
                                        10,
                                    )} ${blog.title}`}</span>
                                </Link>
                            );
                        })}
                    </>
                );
            })}
        </div>
    );
};

export default Archive;
