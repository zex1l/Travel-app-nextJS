import Footer from './footer/Footer'
import { FC } from 'react';

interface IProps {
    children : JSX.Element,
}

const Layout: FC <IProps> = ({children}) => {
    return (
        <>
            <div >
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;