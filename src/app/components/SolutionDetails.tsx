"use client";

import React from "react";
import Model3D from "./Model3D";
import LottiePlayer from "./LottiePlayer";

export default function SolutionDetails() {
    const DETAILS = [
        {
            media: <Model3D />,
            title: "3D Modelling",
            description: (
                <div>
                    <div className="text-xs italic">
                        Click and hold to rotate. Scroll to zoom
                    </div>
                    <div>Lorem ipsum</div>
                </div>
            ),
            credit: (
                <div>
                    <a href="https://skfb.ly/ZZBB">César - Louvre Museum</a> by
                    Benjamin Bardou is licensed under{" "}
                    <a href="http://creativecommons.org/licenses/by/4.0/">
                        Creative Commons Attribution
                    </a>
                </div>
            ),
        },
        {
            media: "abc",
            title: "AI Recognition",
            description: "Lorem ipsum",
        },
        {
            media: (
                <LottiePlayer
                    src="https://lottie.host/7fe903d7-d7a5-48e8-a79b-a63ba6f3b4d4/RGeA8VoI3A.json"
                    className="w-full h-full"
                />
            ),
            title: "RFID Tracking",
            description: "Lorem ipsum",
        },
    ];
    return (
        <>
            {DETAILS.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={`container mx-auto max-w-5xl p-5 justify-center flex flex-wrap gap-5 ${
                            index % 2 == 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                    >
                        <div className="w-screen md:w-96">
                            <div
                                className="place-content-center rounded-lg drop-shadow bg-gradient-to-b from-slate-950 to-slate-700"
                                style={{ height: "30rem" }}
                            >
                                {item.media}
                            </div>
                            <div className="text-xs">{item.credit}</div>
                        </div>
                        <div className="flex-auto">
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
