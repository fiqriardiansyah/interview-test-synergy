import Image, { ImageProps } from "next/image";
import React from "react";

type Props = ImageProps & {
    fallbackSrc?: string;
};
export default function ImageWithFallback({ src, className, fallbackSrc = "/error-placeholder.png", ...rest }: Props) {
    const [imgSrc, setImgSrc] = React.useState(src);

    return (
        <Image
            {...rest}
            alt={rest.alt}
            src={imgSrc}
            className={`bg-gray-200 ${className}`}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
}
