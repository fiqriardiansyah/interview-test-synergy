import { Financials } from "@/service/endpoints";

const FinancialsTable = ({ financials }: { financials?: Financials }) => {
    const keys = Object.keys(financials || {})
    return (
        <div className="rounded-2xl border border-gray-100 shadow-sm">
            {keys?.map((key, index) => (
                <button type="button" key={key} className={`${index !== keys.length ? "border-b border-gray-100" : ""} flex w-full `}>
                    <p className="hover:bg-gray-50 p-5 w-full capitalize font-medium text-start">{key}</p>
                    <p className="hover:bg-gray-50 text-gray-500 p-5 w-fit">${financials![key as keyof Financials]}</p>
                </button>
            ))}
        </div>
    )
}

const Loading = () => {
    return <div className="rounded-2xl overflow-hidden bg-gray-100 h-[100px] w-full"></div>
}

FinancialsTable.Loading = Loading

export default FinancialsTable