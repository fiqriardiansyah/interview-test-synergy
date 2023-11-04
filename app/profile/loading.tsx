import Card from "./components/card";
import ClientInformation from "./components/client-information";
import FinancialsTable from "./components/financials-table";
import SectionHeader from "./components/section-header";

export default function Loading() {
    return (
        <div className="container mx-auto px-8 pb-20">
            <SectionHeader size="big" title="Load Data" />
            <ClientInformation.Loading />
            <SectionHeader size="medium" title="Financials" />
            <FinancialsTable.Loading />
            <SectionHeader size="medium" title="Goals" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                <Card.Loading />
                <Card.Loading />
            </div>
            <SectionHeader size="medium" title="Insurances" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                <Card.Loading />
                <Card.Loading />
            </div>
        </div>
    )
}