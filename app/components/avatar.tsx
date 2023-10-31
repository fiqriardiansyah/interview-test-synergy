"use client"

import Image from "next/image";
import useResize, { breakPoints } from "../hooks/useResize";
import Link from "next/link";
import { route } from "../utils/constant";
import { Dropdown, MenuProps } from "antd";
import NavLinks from "./nav-links";
import NavActions from "./nav-actions";

export default function Avatar() {
    const size = useResize();

    const avatar = (
        <button className="relative w-[40px] h-[40px] rounded-full overflow-hidden">
            <Image src="https://source.unsplash.com/random/300×300" alt="Fiqri ardiansyah" layout="fill" className="object-cover" />
        </button>
    )

    const items: MenuProps['items'] = [
        {
            key: route.profile,
            label: (
                <Link href={route.profile} legacyBehavior>
                    <a className="font-semibold">Fiqri Ardiansyah</a>
                </Link>
            )
        },
        {
            type: "divider"
        },
        ...NavLinks.menuLinks,
        ...(size?.breakPoint === "sm" ? [{ type: "divider" } as any, ...NavActions.menuActions] : [])
    ]

    if ((size?.width || 0) >= breakPoints.lg) {
        return (
            <Link href={route.profile}>
                {avatar}
            </Link>
        )
    }

    return (
        <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
            {avatar}
        </Dropdown>
    )

}