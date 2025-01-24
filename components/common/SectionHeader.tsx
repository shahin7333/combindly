function SectionHeader({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="text-center">
            <h1 className="text-xl md:text-[41px] font-extrabold text-[#24223E] dark:text-white">
                {title}
            </h1>
            <p className="text-md md:text-[19px] font-semibold text-[#24223E] dark:text-white mt-6 max-w-[50%] mx-auto">
                {description}
            </p>
        </div>
    );
}

export default SectionHeader;
