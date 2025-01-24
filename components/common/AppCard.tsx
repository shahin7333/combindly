function AppCard(app: {
    imageAnimation?: string;
    imageURL?: string;
    alt?: string;
    name: string;
    shortDescription?: string;
}) {
    return (
        <div
            // onClick={handleNavigateToAp}
            className="group py-2 flex flex-col items-center bg-white shadow rounded-lg  gap-2  hover:shadow-lg cursor-pointer"
        >
            <div className="h-[60px] w-[60px] flex justify-center items-center rounded-full group-hover:bg-white ">
                <img
                    className={`h-full w-full rounded-full object-cover animate__animated animate__1 ${app?.imageAnimation}`}
                    src={app?.imageURL}
                    alt={app?.alt}
                    loading="lazy"
                />
            </div>

            <div className="">
                <div className="text-base font-axiforma font-medium text-[#24223F] opacity-90 px-2 mb-1">
                    {app?.name}
                </div>
                {/* <div className="w-[230px]">{app?.shortDescription}</div> */}
            </div>
        </div>
    );
}

export default AppCard;
