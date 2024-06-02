import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import SOLUTIONS from "../data/solutions";
import FadeInDiv from "./FadeInDiv";

export default function Solutions() {
    return (
        <div className="w-screen bg-black text-white place-content-center">
            <FadeInDiv
                className="container text-center text-4xl font-medium"
                style={{ maxWidth: "50rem" }}
            >
                Transform your museum experience with cutting-edge technologies.
            </FadeInDiv>
            <div className="container grid md:grid-cols-3 px-5 py-20 gap-5 place-content-center">
                {SOLUTIONS.map((item, index) => {
                    return (
                        <FadeInDiv
                            key={index}
                            className="mx-auto p-5 text-center"
                            delay={0.2 * (index + 2)}
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
                                    className="p-2 hover:scale-110"
                                />
                            </a>
                        </FadeInDiv>
                    );
                })}
            </div>
        </div>
    );
}
