// react
import { useState ,useEffect } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        isVisible &&
        <button className={`scroll-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <i className="fa fa-angle-up"></i>
        </button>
    )
}