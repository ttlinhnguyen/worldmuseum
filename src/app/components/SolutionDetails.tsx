"use client";

import React from "react";
import Model3D from "./Model3D";
import LottiePlayer from "./LottiePlayer";
import Image from "next/image";
import FadeInDiv from "./FadeInDiv";

export default function SolutionDetails() {
    const DETAILS = [
        {
            id: "model-3d",
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
            id: "ai-recognition",
            media: (
                <Image
                    src="https://ttlinhnguyen.github.io/worldmuseum/ocr-cursive.jpg"
                    alt="Optical Character Recognition (OCR) for handwriting"
                    fill
                    className="w-full h-full rounded-lg"
                />
            ),
            title: "AI Recognition",
            description: "Lorem ipsum",
        },
        {
            id: "rfid-tracking",
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
        <div className="my-5">
            <FadeInDiv className="container sm-container text-center">
                <h2 className="py-10">
                    Transform your museum experience with cutting-edge
                    technologies
                </h2>
            </FadeInDiv>
            {DETAILS.map((item, index) => {
                return (
                    <div
                        key={index}
                        id={item.id}
                        className={`container p-5 justify-center flex flex-wrap gap-10 ${
                            index % 2 == 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                    >
                        <FadeInDiv className="w-screen md:w-96">
                            <div
                                className="place-content-center rounded-lg drop-shadow bg-gradient-to-b from-slate-950 to-slate-700 relative w-full"
                                style={{ height: "30rem" }}
                            >
                                {item.media}
                            </div>
                            <div className="text-xs">{item.credit}</div>
                        </FadeInDiv>
                        <FadeInDiv className="flex-auto py-10" delay={0.6}>
                            <h3 className="pb-5">{item.title}</h3>
                            <div>{item.description}</div>
                        </FadeInDiv>
                    </div>
                );
            })}
        </div>
    );
}
