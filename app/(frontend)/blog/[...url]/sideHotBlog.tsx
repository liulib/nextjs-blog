import Link from 'next/link';

import { BaseResponse } from '@/types';
import { IArticle } from '@/types/api';
import { fetcher } from '@/lib/utils';

export const SideHotBlog = async () => {
    const { data } = await fetcher<BaseResponse<IArticle[]>>(`https://www.vvvv.plus/api/article/getTopicList`);

    return (
        <div className='hidden xl:block sticky top-[20vh] h-fit bg-white w-48'>
            <div className='relative rounded-xl border border-dashed border-slate-500/50 p-4 dark:border-white/10 sm:flex-row'>
                <div className='text-normal absolute left-2.5 top-0 -translate-y-1/2 bg-white px-2 font-normal text-slate-500 dark:bg-slate-800'>
                    热门文章推荐
                </div>

                {data.map(blog => {
                    return (
                        <Link
                            title={blog.title}
                            key={blog.id}
                            href={`/blog/${blog.url}`}
                            className='py-1 block cursor-pointer hover:text-blue-500 dark:hover:text-sky-500 truncate text-base text-slate-600 dark:text-slate-400'
                        >
                            {blog.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SideHotBlog;
