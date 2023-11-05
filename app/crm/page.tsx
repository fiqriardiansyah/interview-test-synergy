"use client";

import { useQuery } from "react-query";
import SearchBar from "./components/search-bar";
import TableClients from "./components/table";
import { Client, Endpoints } from "@/service/endpoints";
import React from "react";
import { CrmContext } from "./context/crm";
import Loading from "./loading";
import Error from "./error";

export default function Page() {
    const { setClients } = React.useContext(CrmContext);

    const clients = useQuery("/clients", async () => (await Endpoints.getDataClients()) as Client[], {
        onSuccess(data) {
            if (setClients) {
                setClients(data);
            }
        },
    });

    if (clients.isLoading) return <Loading />;
    if (clients.isError) return <Error error={{ message: (clients.error as any)?.message }} />;

    return (
        <div className="w-full flex flex-col gap-6 pb-20">
            <SearchBar />
            <TableClients />
        </div>
    );
}
