"use client";

import React from "react";
import FadeInDiv from "./FadeInDiv";

export default function Banner() {
    return (
        <div
            className="relative bg-cover bg-gray-300 bg-blend-multiply bg-center p-10 place-content-center"
            style={{
                backgroundImage:
                    'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa")',
                height: "50rem",
            }}
        >
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
            <FadeInDiv className="container">
                <div className="text-6xl text-white/80 font-medium">
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
            </FadeInDiv>
        </div>
    );
}
