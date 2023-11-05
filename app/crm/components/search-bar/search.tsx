"use client"

import { Client } from "@/service/endpoints"
import { Select } from "antd"
import React from "react"
import { FiSearch } from "react-icons/fi"

type Props = React.HTMLAttributes<HTMLDivElement> & {
    clients?: Client[]
}

export default function Search({ clients, ...props }: Props) {

    const onChange = (val: string) => {
        console.log(val)
    }

    return (
        <div className="relative" {...props}>
            <FiSearch className="absolute z-10 text-2xl text-gray-400 top-1/2 transform -translate-y-1/2 ml-3 pointer-events-none" />
            <Select allowClear size="large" className="select-clients w-[300px]" showSearch suffixIcon={null} placeholder="Search" optionLabelProp="label" onChange={onChange}>
                {clients?.map((client) => (
                    <Select.Option key={client.id} value={client.name} label={client.name}>
                        <p className="text-base font-medium capitalize">{client.name} <span className="text-gray-400 text-sm font-normal ml-2">@{client.name?.split(" ")[0]}</span> </p>
                    </Select.Option>
                ))}
            </Select>
        </div>
    )
}