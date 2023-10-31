import React from "react"

export const breakPoints = { // based on tailwinds breakpoints
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
}

type GetBreakpoint = { width: number; breakPoint: keyof typeof breakPoints }

const getBreakPoint = () => {
    const currWidth = window.innerWidth

    if (0 < currWidth && currWidth < breakPoints.sm) return { width: currWidth, breakPoint: "sm" }
    if (breakPoints.sm < currWidth && currWidth < breakPoints.md) return { width: currWidth, breakPoint: "md" }
    if (breakPoints.md < currWidth && currWidth < breakPoints.lg) return { width: currWidth, breakPoint: "lg" }
    if (breakPoints.lg < currWidth && currWidth < breakPoints.xl) return { width: currWidth, breakPoint: "xl" }
    if (currWidth >= breakPoints["2xl"]) return { width: currWidth, breakPoint: "2xl" }
}

const useResize = () => {
    const [size, setSize] = React.useState<GetBreakpoint | null>(null)

    const onResize = () => {
        setSize(getBreakPoint() as GetBreakpoint);
    }

    React.useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [])

    return size

}

export default useResize;