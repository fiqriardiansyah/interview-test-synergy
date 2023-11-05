import useOutsideClick from "@/hooks/useOutsideClick";
import { AnimatePresence, motion, HTMLMotionProps } from "framer-motion";
import React from "react"

type Props = HTMLMotionProps<'div'> & {
    children: React.ReactNode
    contentDropdown: React.ReactNode
}

export default function Dropdown({ children, contentDropdown, className, ...props }: Props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null)

    useOutsideClick(ref, () => {
        setIsOpen(false);
    })

    const onClick = () => {
        console.log("wkwk")
        setIsOpen((prev) => !prev)
    }

    return (
        <div className="relative">
            {React.Children.map(children, (child) => (
                React.cloneElement(child as any, { onClick })
            ))}
            <AnimatePresence>
                {isOpen ? (
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} ref={ref}
                        className={`absolute mt-2 z-40 rounded-lg border bg-white min-w-[200px] border-gray-200 shadow-xl p-4 flex flex-col gap-3 ${className}`} {...props}>
                        {contentDropdown}
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    )
}