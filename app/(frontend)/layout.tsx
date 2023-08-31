import FrontHeader from '@/components/widget/front-header';
import FrontFooter from '@/components/widget/front-footer';

export default function FrontLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <FrontHeader></FrontHeader>
            {children}
            <FrontFooter></FrontFooter>
        </>
    );
}
