"use client"

import { useQuery } from "react-query"
import Card from "./components/card"
import ClientInformation from "./components/client-information"
import FinancialsTable from "./components/financials-table"
import SectionHeader from "./components/section-header"
import { Endpoints, Profile } from "@/service/endpoints"
import Error from "./error"
import Button from "@/components/common/button"
import Loading from "./loading"

export default function Page() {
    const profile = useQuery("/profile", async () => await Endpoints.getDataProfile() as Profile)

    if (profile.isLoading) return <Loading />
    if (profile.isError) return <Error error={{ message: (profile.error as any)?.message }} />

    return (
        <div className="container mx-auto px-8 pb-24">
            <SectionHeader size="big" title={profile?.data?.clientInformation?.name} />
            <ClientInformation clientInformation={profile?.data?.clientInformation} />
            <SectionHeader size="medium" title="Financials" />
            <FinancialsTable financials={profile?.data?.financials} />
            <SectionHeader size="medium" title="Goals" />
            <div className="grid grid-cols-1 md:gap-10 md:grid-cols-2 gap-5 ">
                <Card image="https://source.unsplash.com/random/300×300" title="emergency fund" desc={`$${profile.data?.goals?.emergencyFund}`} action={<Button className="text-sm md:text-base">edit</Button>} />
                <Card image="/example.png" title="travel" desc={`$${profile.data?.goals?.travel}`} action={<Button className="text-sm md:text-base">edit</Button>} />
            </div>
            <SectionHeader size="medium" title="Insurance" />
            <div className="grid grid-cols-1 md:gap-10 md:grid-cols-2 gap-5 ">
                <Card image="/example.png" title="life insurance" desc={`Plan A . $${profile.data?.insurances?.lifeInsurance}`} action={<Button className="text-sm md:text-base">view insurance</Button>} />
                <Card image="/example.png" title="personal accident" desc={`Plan A . $${profile.data?.insurances?.personalAccident}`} action={<Button className="text-sm md:text-base">view insurance</Button>} />
            </div>
        </div>
    )
}