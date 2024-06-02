import React from "react";
import FadeInDiv from "./FadeInDiv";
import COLLECTION from "../data/collection";

export default function CoveredObjects() {
    return (
        <div className="container p-10">
            <FadeInDiv className="text-center py-10">
                <h2>
                    Our solutions cover{" "}
                    <span className="text-blue-500">
                        <u>93.5%</u>
                    </span>{" "}
                    of the collection
                </h2>
            </FadeInDiv>
            <FadeInDiv
                className="grid md:grid-cols-4 grid-cols-2 gap-5"
                delay={0.8}
            >
                {COLLECTION.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-cover bg-center bg-blend-multiply
                             h-60 p-3 rounded-lg text-white bg-gray-600 relative hover-scale"
                            style={{ backgroundImage: `url("${item.image}")` }}
                        >
                            <div
                                className={`w-10 h-5 rounded-full ${
                                    item.covered ? "bg-blue-500" : "bg-gray-400"
                                }`}
                            ></div>
                            <h3>{item.name}</h3>
                            <div className="absolute bottom-0 py-2">
                                Size: {item.size}
                            </div>
                        </div>
                    );
                })}
            </FadeInDiv>
            <FadeInDiv delay={0.8} className="flex gap-10 py-5">
                <div className="flex">
                    <div className="w-10 h-5 bg-blue-500 rounded-full mr-3"></div>
                    <div>Covered</div>
                </div>
                <div className="flex">
                    <div className="w-10 h-5 bg-gray-400 rounded-full mr-3"></div>
                    <div>Not covered</div>
                </div>
            </FadeInDiv>
        </div>
    );
}
