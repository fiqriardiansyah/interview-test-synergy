"use client";

import { route } from "@/utils/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CrmProvider } from "./context/crm";

export default function Layout({ children }: { children: any }) {
    const pathname = usePathname();
    return (
        <div className="container mx-auto px-8">
            <h1 className="text-3xl font-semibold my-5 text-gray-700">CRM</h1>
            <div className="w-full h-[1px] bg-gray-200 "></div>
            <div className="flex items-center gap-1 py-4">
                <Link href={route.crmClient} legacyBehavior>
                    <a className={`${pathname === route.crmClient ? "text-blue-600 bg-blue-50" : "text-gray-400"} text-sm font-medium px-4 py-2 rounded-lg`}>
                        Clients
                    </a>
                </Link>
                <Link href={route.crmPolicy} legacyBehavior>
                    <a className={`${pathname === route.crmPolicy ? "text-blue-600 bg-blue-50" : "text-gray-400"} text-sm font-medium px-4 py-2 rounded-lg`}>
                        Policy
                    </a>
                </Link>
                <Link href={route.crmSupport} legacyBehavior>
                    <a className={`${pathname === route.crmSupport ? "text-blue-600 bg-blue-50" : "text-gray-400"} text-sm font-medium px-4 py-2 rounded-lg`}>
                        Support
                    </a>
                </Link>
            </div>
            <CrmProvider>{children}</CrmProvider>
        </div>
    );
}
