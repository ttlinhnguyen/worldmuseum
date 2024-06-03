"use client";

import React from "react";
import FadeInDiv from "./FadeInDiv";
import { useScroll, useTransform } from "framer-motion";

export default function Hero({ ...props }) {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div
            className="relative bg-cover bg-gray-300 bg-blend-multiply bg-center place-content-center"
            style={{
                backgroundImage:
                    'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa")',
                height: "55rem",
            }}
            {...props}
        >
            <div className="absolute w-full h-1/3 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
            <FadeInDiv
                className="container text-white/80 p-5"
                style={{ scale: scale }}
            >
                <h1 className="sm-container">
                    Digitisation
                    <br /> of World Museum
                </h1>
                <div className="text-xl">
                    Explore 25+ million objects from anywhere.
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
