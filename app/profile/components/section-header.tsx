export default function SectionHeader({ size, title }: { size: "big" | "medium"; title?: string }) {
    return (
        <section>
            <h1 className={`${size === "big" ? "text-4xl" : "text-2xl"} mt-7 font-semibold m-0`}>{title}</h1>
            <div className="wfull h-[1px] bg-gray-300 my-5" />
        </section>
    );
}
