import { Button } from '@/components/ui/button';
import { BaseResponse } from '@/types';
import { IQueryArticleListRes } from '@/types/api';

import { fetcher } from '@/lib/utils';

export default async function Blog() {
    const res = await fetcher('https://www.vvvv.plus/api/article/getList?page=1&pageSize=5&isDelete=0');

    console.log('------------------');
    console.log('get data on server');
    console.log(res);

    return (
        <div className='max-w-5xl mx-auto'>
            <p>route: /Blog</p>
            <Button>Click me</Button>
        </div>
    );
}
