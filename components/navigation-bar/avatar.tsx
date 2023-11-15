"use client";

import { Dropdown, MenuProps } from "antd";
import Image from "next/image";
import { menuActions1, menuActions2, menuActions3, menuActions4, route } from "../../utils/constant";

const avatar = (
    <button className="relative w-[40px] h-[40px] rounded-full overflow-hidden">
        <Image src="https://source.unsplash.com/random/300×300" alt="Fiqri ardiansyah" layout="fill" className="object-cover" />
    </button>
);

const MenuLabel = ({ action }: { action: (typeof menuActions1)[0] }) => {
    return (
        <div className="flex items-center justify-between py-1">
            <div className="flex items-center font-medium gap-2">
                {action.icon}
                {action.title}
            </div>
            {action.shortcut}
        </div>
    );
};

export default function Avatar() {
    const items: MenuProps["items"] = [
        {
            key: route.profile,
            label: (
                <div className="flex items-center gap-2 w-[200px]">
                    <div className="relative">
                        {avatar} <div className="w-3 h-3 bg-green-400 rounded-full absolute right-0 bottom-0 border-2 border-white"></div>{" "}
                    </div>
                    <div className="flex flex-col">
                        <p className="m-0 font-semibold text-base leading-tight">Olivia Rhye</p>
                        <span className="m-0 leading-tight">olivia@untitledui.com</span>
                    </div>
                </div>
            ),
        },
        {
            type: "divider",
        },
        ...menuActions1.map((act) => ({
            key: act.title,
            label: <MenuLabel action={act} />,
        })),
        {
            type: "divider",
        },
        ...menuActions2.map((act) => ({
            key: act.title,
            label: <MenuLabel action={act} />,
        })),
        {
            type: "divider",
        },
        ...menuActions3.map((act) => ({
            key: act.title,
            label: <MenuLabel action={act} />,
        })),
        {
            type: "divider",
        },
        ...menuActions4.map((act) => ({
            key: act.title,
            label: <MenuLabel action={act} />,
        })),
    ];

    return (
        <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
            {avatar}
        </Dropdown>
    );
}
