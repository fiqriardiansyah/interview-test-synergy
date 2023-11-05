import { MESSAGE_ERROR_DEFAULT } from "@/utils/constant";

export interface Client {
    id: string;
    name: string;
    dob: Date;
    gender: Gender;
    maritalStatus: MaritalStatus;
    employmentStatus: EmploymentStatus;
    image?: string;
}

export type EmploymentStatus = "Employed" | "Unemployed";

export type Gender = "Female" | "Male";

export type MaritalStatus = "Single" | "Divorced" | "Married";


export interface Profile {
    clientInformation: ClientInformation;
    financials: Financials;
    goals: Goals;
    insurances: Insurances;
}

export interface ClientInformation {
    name: string;
    dob: string;
    gender: string;
    maritalStatus: string;
    employmentStatus: string;
}

export interface Financials {
    income: string;
    expenses: string;
    savings: string;
    investment: string;
    debt: string;
    cashflow: string;
    networth: string;
}

export interface Goals {
    emergencyFund: string;
    travel: string;
}

export interface Insurances {
    lifeInsurance: string;
    personalAccident: string;
}


export class Endpoints {
    static baseUrl = "https://interview-test-mock-api.azurewebsites.net"
    static getDataProfile = async () => {
        try {
            const req = await fetch(this.baseUrl + "/profile", { cache: 'no-store' });
            const json = await req.json();
            if (!req.ok) throw new Error(json?.message);
            return json
        } catch (e: any) {
            throw new Error(e?.message || MESSAGE_ERROR_DEFAULT)
        }
    }
    static getDataClients = async () => {
        try {
            const req = await fetch(this.baseUrl + "/clients", { cache: 'no-store' });
            const json = await req.json();
            if (!req.ok) throw new Error(json?.message);
            return json
        } catch (e: any) {
            throw new Error(e?.message || MESSAGE_ERROR_DEFAULT)
        }
    }
}