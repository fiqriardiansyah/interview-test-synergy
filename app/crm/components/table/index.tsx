"use clients";

import { Client } from "@/service/endpoints";
import { route } from "@/utils/constant";
import { PaginationProps, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CrmContext } from "../../context/crm";
import Button from "@/components/common/button";
import { MdArrowBack, MdArrowForward, MdFilterList } from "react-icons/md";
import ImageWithFallback from "@/components/common/image-with-fallback";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";
import useResize, { breakPoints } from "@/hooks/useResize";

const itemRender: PaginationProps["itemRender"] = (_, type, originalElement) => {
    if (type === "prev") {
        return (
            <Button className="flex items-center gap-3 text-sm">
                <MdArrowBack />
                <span className="hidden sm:block">Previous</span>
            </Button>
        );
    }
    if (type === "next") {
        return (
            <Button className="flex items-center gap-3 text-sm">
                <span className="hidden sm:block">Next</span>
                <MdArrowForward />
            </Button>
        );
    }
    return originalElement;
};

export default function TableClients() {
    const { clients } = React.useContext(CrmContext);
    const size = useResize();

    const columns: ColumnsType<Client> = [
        {
            title: "Name",
            dataIndex: "name",
            fixed: true,
            render: (text, record) => (
                <Link href={route.profile} legacyBehavior>
                    <a className="flex items-start lg:items-center flex-col lg:flex-row gap-3">
                        <ImageWithFallback
                            src={record?.image || "/error-placeholder.png"}
                            alt={record?.name}
                            className="w-[50px] h-[50px] rounded-full object-cover border border-gray-300"
                            width={50}
                            height={50}
                        />
                        <p className="m-0 capitalize text-sm md:text-base font-medium">{text}</p>
                    </a>
                </Link>
            ),
        },
        {
            title: "Gender",
            dataIndex: "gender",
            render: (text) => <p className="m-0 capitalize text-sm md:text-base">{text}</p>,
            onFilter: (value, record) => record.gender!.indexOf(value as string) === 0,
            sorter: (a, b) => a.gender!.length - b.gender!.length,
            sortIcon: ({ sortOrder }) => {
                if (sortOrder === "ascend") return <HiOutlineArrowSmUp />;
                if (sortOrder === "descend") return <HiOutlineArrowSmDown />;
                return <MdFilterList />;
            },
        },
        {
            title: "DOB",
            dataIndex: "dob",
            render: (text) => <p className="m-0 capitalize text-sm md:text-base">{moment(text).format("DD/MM/YYYY")}</p>,
        },
        {
            title: "Marital Status",
            dataIndex: "maritalStatus",
            render: (text) => <p className="m-0 capitalize text-sm md:text-base">{text}</p>,
        },
        {
            title: "Employment",
            dataIndex: "employmentStatus",
            render: (text) => <p className="m-0 capitalize text-sm md:text-base">{text}</p>,
        },
    ];

    return (
        <Table
            scroll={{ x: 600 }}
            rowKey={(val) => val.id}
            rowSelection={{ type: "checkbox" }}
            pagination={{ pageSize: 3, size: "default", itemRender }}
            size="small"
            columns={columns}
            dataSource={clients}
            className="table-clients"
        />
    );
}
