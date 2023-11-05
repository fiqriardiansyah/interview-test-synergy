import { Client } from "@/service/endpoints";
import React from "react";

type CrmContextType = {
    genderSelected?: string[];
    maritalSelected?: string[];
    employmentSelected?: string[];
    setGenderSelected?: React.Dispatch<React.SetStateAction<string[]>>;
    setMaritalSelected?: React.Dispatch<React.SetStateAction<string[]>>;
    setEmploymentSelected?: React.Dispatch<React.SetStateAction<string[]>>;
    clients?: Client[];
    query?: string;
    setQuery?: React.Dispatch<React.SetStateAction<string | undefined>>;
    setClients?: React.Dispatch<React.SetStateAction<Client[]>>;
};

export const CrmContext = React.createContext<CrmContextType>({});

export const CrmProvider = ({ children }: { children: React.ReactNode }) => {
    const [query, setQuery] = React.useState<string | undefined>();
    const [clients, setClients] = React.useState<Client[]>([]);
    const [genderSelected, setGenderSelected] = React.useState<string[]>([]);
    const [maritalSelected, setMaritalSelected] = React.useState<string[]>([]);
    const [employmentSelected, setEmploymentSelected] = React.useState<string[]>([]);

    const clientsWithFilter = () => {
        const filteredWithQuery = query ? clients?.filter((client) => client.name === query) : clients;
        return filteredWithQuery
            ?.filter((client) => (genderSelected?.length ? genderSelected.includes(client.gender!) : client))
            ?.filter((client) => (maritalSelected?.length ? maritalSelected.includes(client.maritalStatus!) : client))
            ?.filter((client) => (employmentSelected?.length ? employmentSelected.includes(client.employmentStatus!) : client));
    };

    const value = {
        genderSelected,
        setGenderSelected,
        maritalSelected,
        setMaritalSelected,
        employmentSelected,
        setEmploymentSelected,
        query,
        setQuery,
        clients: clientsWithFilter(),
        setClients,
    };

    return <CrmContext.Provider value={value}>{children}</CrmContext.Provider>;
};
