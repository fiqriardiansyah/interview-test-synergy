import React from "react";

export default function Button({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={`bg-white border border-gray-100 rounded-lg px-4 py-2 shadow-sm font-semibold capitalize ${className}`} {...props} />
    )
}