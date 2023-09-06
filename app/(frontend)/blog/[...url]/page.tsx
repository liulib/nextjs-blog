import { notFound } from 'next/navigation';
import 'github-markdown-css';

import { BaseResponse } from '@/types';
import { IArticle } from '@/types/api';
import { fetcher } from '@/lib/utils';
import { markdownToHtml } from '@/lib/utils';
import SideNav from './sideNav';
import SideHotBlog from './sideHotBlog';

interface PostPageProps {
    params: {
        url: string[];
    };
}

const Blog = async ({ params }: PostPageProps) => {
    const { code, data } = await fetcher<BaseResponse<IArticle>>(
        `https://www.vvvv.plus/api/article/getDetailByUrl?url=${params.url}`,
    );

    if (code !== 1) {
        notFound();
    }

    const markdownHtml = await markdownToHtml(data.content);
    return (
        <div className='max-w-7xl mx-auto pt-8 flex gap-6'>
            <SideHotBlog></SideHotBlog>

            <div
                id='markdown-dom'
                className='max-w-3xl markdown-body flex-1'
                dangerouslySetInnerHTML={{ __html: markdownHtml }}
                style={{ margin: '0 auto' }}
            ></div>

            <SideNav></SideNav>
        </div>
    );
};

export default Blog;
