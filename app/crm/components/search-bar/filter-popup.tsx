"use client"

import Dropdown from "@/components/common/dropdown"
import React from "react"

type Props = {
    children: React.ReactNode
    options: string[]
}

export default function FilterPopup({ children, options }: Props) {

    const content = (
        <div className="flex flex-col gap-2">
            {options?.map((option) => (
                <label key={option} htmlFor={option} className="flex items-center gap-2 text-sm capitalize">
                    <input type="checkbox" id={option} />
                    {option}
                </label>
            ))}
        </div>
    )

    return (
        <Dropdown contentDropdown={content}>
            {children}
        </Dropdown>
    )
}