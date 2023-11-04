import { ClientInformation as ClientInformationType } from "@/service/endpoints";
import moment from "moment";

const ClientInformation = ({ clientInformation }: { clientInformation?: ClientInformationType }) => {
    return (
        <div className="w-full p-5 rounded-2xl bg-gray-50 flex items-start gap-4 flex-wrap">
            <p className="w-[150px] text-gray-500 font-medium inline-block">
                <span className="block capitalize">gender</span>
                <span className="capitalize font-normal">{clientInformation?.gender}</span>
            </p>
            <p className="w-[150px] text-gray-500 font-medium inline-block">
                <span className="block capitalize">DOB</span>
                <span className="capitalize font-normal">{moment(clientInformation?.dob).format("DD/MM/YYYY")}</span>
            </p>
            <p className="w-[150px] text-gray-500 font-medium inline-block">
                <span className="block capitalize">marital status</span>
                <span className="capitalize font-normal">{clientInformation?.maritalStatus}</span>
            </p>
            <p className="w-[150px] text-gray-500 font-medium inline-block">
                <span className="block capitalize">employment</span>
                <span className="capitalize font-normal">{clientInformation?.employmentStatus}</span>
            </p>
        </div>
    )
}

const Loading = () => {
    return <div className="rounded-2xl overflow-hidden bg-gray-100 h-[100px] w-full"></div>
}

ClientInformation.Loading = Loading

export default ClientInformation