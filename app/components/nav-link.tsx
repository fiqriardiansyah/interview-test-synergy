"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = React.HTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

export default function NavLink({ href, className, ...props }: Props) {
    const pathname = usePathname();
    const matchname = (() => {
        if (href === "/" && pathname === "/") return true;
        const removeSlash = pathname.split("/").filter(Boolean);
        return removeSlash.includes(href.substring(1));
    })();

    return (
        <Link href={href} legacyBehavior>
            <a
                className={`${
                    matchname ? "text-gray-800 bg-gray-50" : "text-gray-400"
                } focus:text-gray-800 focus:bg-gray-50 hover:text-gray-800 hover:bg-gray-50 rounded px-3 py-1 text-base font-medium ${className}`}
                {...props}
            />
        </Link>
    );
}
