"use client";

import React from "react";
import Model3D from "./Model3D";
import LottiePlayer from "./LottiePlayer";
import FadeInDiv from "./FadeInDiv";
import PopUp from "./Popup";

export default function SolutionDetails() {
    const DETAILS = [
        {
            id: "model-3d",
            media: (
                <div
                    className="bg-cover bg-center size-full rounded-lg"
                    style={{
                        backgroundImage: `url("https://ttlinhnguyen.github.io/worldmuseum/cesar_louvre_museum/scene.png")`,
                    }}
                ></div>
            ),
            title: "3D Modelling",
            subtitle: "Explore every intricate detail from any angle",
            description: (
                <div>
                    <div className="mb-3">
                        3D Modelling brings artefacts to life in a digital
                        space, enhancing the accessibility and interactivity of
                        our collections and reducing physical handling of
                        fragile items. With 3D models, we can create immersive
                        virtual tours and educational tools that provide a
                        deeper understanding of cultural artefacts, making
                        history more engaging and accessible to everyone.
                    </div>
                    <PopUp text="Show 3D Model">
                        <div className="">
                            <h3>3D Model</h3>
                            <div className="text-xs italic">
                                Click and hold to rotate. Scroll to zoom
                            </div>
                            <div
                                className="bg-black w-full"
                                style={{ height: "30rem" }}
                            >
                                <Model3D />
                            </div>
                            <div className="text-xs">
                                <a href="https://skfb.ly/ZZBB">
                                    César - Louvre Museum
                                </a>{" "}
                                by Benjamin Bardou is licensed under{" "}
                                <a href="http://creativecommons.org/licenses/by/4.0/">
                                    Creative Commons Attribution
                                </a>
                            </div>
                        </div>
                    </PopUp>
                </div>
            ),
            credit: "",
        },
        {
            id: "ai-recognition",
            media: (
                <div
                    className="bg-cover bg-center size-full rounded-lg"
                    style={{
                        backgroundImage: `url("https://ttlinhnguyen.github.io/worldmuseum/ocr-cursive.jpg")`,
                    }}
                ></div>
            ),
            title: "AI Recognition",
            subtitle: "Gain new insights into our collections",
            description: (
                <div>
                    AI recognition transforms how we catalog and understand our
                    extensive collections. This technology swiftly and
                    accurately classifies artefacts and interprets historical
                    texts, providing valuable insights that might otherwise be
                    missed. By leveraging AI recognition, we enhance the
                    museum's effiency and deepen out understanding of each
                    artefact's historical and cultural significance.
                </div>
            ),
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
            subtitle: "Protect and manage our cultural treasures",
            description: (
                <div>
                    RFID (Radio Frequency Identification) revolutionises the way
                    we monitor and manage our 25+ million objects. This tracking
                    system provides real-time updates on the location of
                    artefacts, significantly reducing the risk of theft and
                    misplacement. By implementing RFID tracking, we uphold the
                    integrity of our collections, offering peace of mind to
                    stakeholders, and ensuring our cultural treasures are
                    protected for future generations.
                </div>
            ),
        },
    ];
    return (
        <div className="m-5">
            <FadeInDiv className="container sm-container text-center">
                <h2 className="py-10">
                    Transform your museum experience with cutting-edge
                    technologies
                </h2>
            </FadeInDiv>
            {DETAILS.map((item, index) => {
                return (
                    <FadeInDiv
                        key={index}
                        id={item.id}
                        className={`container my-10 justify-between flex bg-white shadow flex-col ${
                            index % 2 == 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                        }`}
                    >
                        <div className="w-full md:w-96 flex-none">
                            <div
                                className="place-content-center drop-shadow bg-gradient-to-b from-slate-950 to-slate-700 relative w-full"
                                style={{ height: "30rem" }}
                            >
                                {item.media}
                            </div>
                            <div className="text-xs">{item.credit}</div>
                        </div>
                        <div className="py-5 px-10">
                            <h3 className="">{item.title}</h3>
                            <div>
                                <i>{item.subtitle}</i>
                            </div>
                            <hr />
                            <div className="text-gray-600">
                                {item.description}
                            </div>
                        </div>
                    </FadeInDiv>
                );
            })}
        </div>
    );
}
