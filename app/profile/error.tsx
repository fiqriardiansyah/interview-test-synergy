"use client"

import Button from "@/components/common/button";
import ErrorBox from "@/components/layout/error";
import { route } from "@/utils/constant";
import SectionHeader from "./components/section-header";

export default function Error({ error }: { error: { message?: string } }) {
    return (
        <div className="container mx-auto px-8">
            <SectionHeader size="big" title="Olivia Rhye" />
            <ErrorBox error={{ message: error?.message, title: "Opps Unable to load profile" }} actions={<a href={route.profile}>
                <Button className="mt-10">
                    Retry
                </Button>
            </a>} />
        </div>
    )
}