import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/project/")) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    if (location.hash) {
      const id = location.hash.replace("#", "");

      window.setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);

      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollManager;
