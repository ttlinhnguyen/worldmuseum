import React from "react";

export default function Banner() {
    return (
        <div
            className="bg-cover bg-gray-300 bg-blend-multiply bg-center px-10 md:px-40 h-96 place-content-center"
            style={{
                backgroundImage:
                    'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa")',
            }}
        >
            <div className="container mx-auto">
                <div className="text-5xl text-white/80 font-medium">
                    Digitisation
                    <br />
                    of World Museum
                </div>
                <div className="text-xs text-white/50">
                    Photo by{" "}
                    <a href="https://unsplash.com/@nasa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        NASA
                    </a>{" "}
                    on{" "}
                    <a href="https://unsplash.com/photos/photo-of-outer-space-Q1p7bh3SHj8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Unsplash
                    </a>
                </div>
            </div>
        </div>
    );
}
