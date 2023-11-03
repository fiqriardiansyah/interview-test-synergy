"use client"

import Button from "@/components/common/button";
import Error from "@/components/layout/error";
import { route } from "@/utils/constant";

export default function Page({ error }: { error: { message?: string } }) {
    return (
        <div className="container mx-auto px-8 min-h-[80vh] flex items-center">
            <Error error={{ message: error?.message, title: "Opps Unable to load profile" }} actions={<a href={route.profile}>
                <Button className="mt-10">
                    Retry
                </Button>
            </a>} />
        </div>
    )
}