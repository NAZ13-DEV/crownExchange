import { useEffect, useState } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("lg");

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1024) setBreakpoint("lg");
      else if (width >= 768) setBreakpoint("md");
      else setBreakpoint("sm");
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
