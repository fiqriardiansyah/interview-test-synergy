"use client";

import Dropdown from "@/components/common/dropdown";
import React from "react";

type Props = {
    children: React.ReactNode;
    options: string[];
    selected?: string[];
    setSelected?: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function FilterPopup({ children, options, selected, setSelected }: Props) {
    const onChangeCheck = (option: string) => {
        return () => {
            if (setSelected) {
                setSelected((prev) => {
                    if (prev?.find((p) => p === option)) return prev?.filter((p) => p !== option);
                    return [...prev, option];
                });
            }
        };
    };

    const content = (
        <div className="flex flex-col gap-2">
            {options?.map((option) => (
                <label key={option} htmlFor={option} className="flex items-center gap-2 text-sm capitalize">
                    <input onChange={onChangeCheck(option)} checked={!!selected?.find((slc) => slc === option)} type="checkbox" id={option} />
                    {option}
                </label>
            ))}
        </div>
    );

    return <Dropdown contentDropdown={content}>{children}</Dropdown>;
}
