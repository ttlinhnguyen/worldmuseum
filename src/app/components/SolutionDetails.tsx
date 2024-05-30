export default function SolutionDetails() {
    const DETAILS = [
        {
            media: "abc",
            title: "3D Modelling",
            description: "def",
        },
        {
            media: "abc",
            title: "AI Recognition",
            description: "def",
        },
        {
            media: "abc",
            title: "RFID Tracking",
            description: "def",
        },
    ];
    return (
        <>
            {DETAILS.map((item, index) => {
                return (
                    <div
                        className={`container mx-auto p-3 justify-center flex flex-wrap gap-5 ${
                            index % 2 == 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                    >
                        <div className="w-screen md:w-96 h-96 rounded-lg drop-shadow bg-slate-200">
                            {item.media}
                        </div>
                        <div className="w-full max-w-2xl">
                            <h3 className="text-3xl font-medium">
                                {item.title}
                            </h3>
                            <div>{item.description}</div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
