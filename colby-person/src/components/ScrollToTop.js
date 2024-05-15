import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log(`Pathname changed to: ${pathname}`);
        document.documentElement.scrollTop = 0; // For modern browsers
        document.body.scrollTop = 0; // For older browsers
        console.log(`Scroll position after scrollTo: ${document.documentElement.scrollTop}`);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
