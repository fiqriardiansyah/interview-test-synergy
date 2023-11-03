"use client"

import { useRouter } from "next/navigation";
import Button from "../common/button";
import { IoArrowBackOutline } from 'react-icons/io5'
import { route } from "@/utils/constant";

export default function NotFound() {
    const router = useRouter()

    const goBack = () => {
        router.back()
    }

    const toHome = () => {
        router.push(route.crmClient)
    }

    return (
        <div className="flex flex-col justify-center gap-6">
            <p className="text-blue-700 font-medium">404 error</p>
            <p className="text-4xl font-semibold">We can&lsquo;t find that page</p>
            <p className="text-gray-400">Sorry, the page you are looking for doen&lsquo;t exist or has been moved.</p>
            <div className="flex items-center gap-3">
                <Button onClick={goBack} className="flex items-center gap-3 !font-medium !py-3 !px-5">
                    <IoArrowBackOutline />
                    Go back
                </Button>
                <Button onClick={toHome} className="!font-normal !py-3 !px-5 !bg-blue-500 text-white border-none">
                    Take me home
                </Button>
            </div>
        </div>
    )
}