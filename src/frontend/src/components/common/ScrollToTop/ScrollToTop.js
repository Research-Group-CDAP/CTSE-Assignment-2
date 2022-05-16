import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// To Scroll Up when we go to new page from bottom to top
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;
