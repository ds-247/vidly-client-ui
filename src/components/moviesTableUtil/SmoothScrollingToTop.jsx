import { useEffect } from "react";

// Custom hook for smooth scrolling to the top of the page
function SmoothScrollingToTop() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
}

export default SmoothScrollingToTop;
