import FrontHeader from '@/components/widget/front-header';
import FrontFooter from '@/components/widget/front-footer';
import FrontContainer from '@/components/widget/front-container';

export default function FrontLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <FrontHeader></FrontHeader>
            <FrontContainer>{children}</FrontContainer>
            <FrontFooter></FrontFooter>
        </>
    );
}
