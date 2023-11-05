import React from "react";

export const breakPoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};

type GetBreakpoint = { width: number; breakPoint: keyof typeof breakPoints };

const useResize = () => {
    const [size, setSize] = React.useState<GetBreakpoint | null>(null);

    React.useEffect(() => {
        const onResize = () => {
            if (0 < window.innerWidth && window.innerWidth < breakPoints.sm) {
                setSize({ width: window.innerWidth, breakPoint: "sm" });
                return;
            }
            if (breakPoints.sm < window.innerWidth && window.innerWidth < breakPoints.md) {
                setSize({ width: window.innerWidth, breakPoint: "md" });
                return;
            }
            if (breakPoints.md < window.innerWidth && window.innerWidth < breakPoints.lg) {
                setSize({ width: window.innerWidth, breakPoint: "lg" });
                return;
            }
            if (breakPoints.lg < window.innerWidth && window.innerWidth < breakPoints.xl) {
                setSize({ width: window.innerWidth, breakPoint: "xl" });
                return;
            }
            setSize({ width: window.innerWidth, breakPoint: "2xl" });
        };

        onResize();
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return size;
};

export default useResize;
