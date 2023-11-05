import Button from "@/components/common/button";
import React from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";

type Props = React.HTMLAttributes<HTMLButtonElement> & {}
export default function FilterButton({ children, ...props }: Props) {
    return (
        <Button className="flex items-center !font-medium !text-xs gap-1 !text-gray-500 !px-2 !shadow-none !border-2 !bg-gray-50 !rounded-full !py-[4px]" {...props}>
            <HiOutlinePlusCircle className="text-base" />
            {children}
        </Button>
    )
}