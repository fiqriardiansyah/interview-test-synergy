import Image from "next/image";
import React from "react";

const Card = ({ action, desc, image, title }: { image: string; title: string; desc: string; action: React.ReactNode }) => {
    return (
        <div className="border w-full border-gray-100 rounded-2xl shadow-sm p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-[48px] h-[48px] rounded-full overflow-hidden relative border border-gray-300">
                    <Image src={image} alt={title} layout="fill" className="object-cover bg-gray-100" />
                </div>
                <div className="flex-1">
                    <p className="font-medium text-base capitalize m-0">{title}</p>
                    <p className="text-gray-600 text-xs capitalize m-0">{desc}</p>
                </div>
            </div>
            {action}
        </div>
    );
};

const Loading = () => {
    return <div className="rounded-2xl overflow-hidden bg-gray-100 h-[100px] w-full"></div>;
};

Card.Loading = Loading;

export default Card;
