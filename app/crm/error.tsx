"use client";

import Button from "@/components/common/button";
import ErrorBox from "@/components/layout/error";
import { route } from "@/utils/constant";

export default function Error({ error }: { error: { message?: string } }) {
    return (
        <div className="my-5">
            <ErrorBox
                error={{
                    message: error?.message,
                    title: "Opps! Unable to load clients",
                }}
                actions={
                    <a href={route.crmClient} className="mt-10">
                        <Button>Retry</Button>
                    </a>
                }
            />
        </div>
    );
}
