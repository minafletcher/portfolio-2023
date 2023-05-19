import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    document.getElementById("root").scroll(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
