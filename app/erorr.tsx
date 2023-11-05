"use client";

import Button from "@/components/common/button";
import Error from "@/components/layout/error";
import { route } from "@/utils/constant";

export default function Page({ error }: { error: { message?: string } }) {
    return (
        <div className="container mx-auto px-8 min-h-[80vh] flex items-center">
            <Error
                error={{
                    message: error?.message,
                    title: "Opps something went wrong!",
                }}
                actions={
                    <a href={route.crmClient}>
                        <Button className="mt-10">Retry</Button>
                    </a>
                }
            />
        </div>
    );
}
