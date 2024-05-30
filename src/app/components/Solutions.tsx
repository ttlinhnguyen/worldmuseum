import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import SOLUTIONS from "../data/solutions";
import FadeInDiv from "./FadeInDiv";

export default function Solutions() {
    return (
        <div className="w-screen bg-black text-white">
            <div className="container grid md:grid-cols-3 px-5 py-20 gap-5">
                {SOLUTIONS.map((item, index) => {
                    return (
                        <FadeInDiv
                            key={index}
                            className="mx-auto p-5 text-center"
                            transition={{
                                ease: "easeInOut",
                                delay: 0.3 * (index + 1),
                                duration: 0.3,
                            }}
                        >
                            <div className="p-3">
                                <FontAwesomeIcon icon={item.icon} size="3x" />
                            </div>
                            <div className="text-xl font-medium">
                                {item.name}
                            </div>
                            <div>{item.description}</div>
                            <a href={item.path} title="See more">
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    size="lg"
                                    className="p-2"
                                />
                            </a>
                        </FadeInDiv>
                    );
                })}
            </div>
        </div>
    );
}
