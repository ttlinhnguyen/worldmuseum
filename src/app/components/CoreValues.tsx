import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CORE_VALUES from "../data/coreValues";
import FadeInDiv from "./FadeInDiv";

export default function CoreValues() {
    return (
        <div className="w-screen bg-black text-white place-content-center text-center py-10">
            <FadeInDiv className="container sm-container">
                <h2>Our Pillars of Innovation</h2>
            </FadeInDiv>
            <div className="container grid md:grid-cols-3 px-5 py-20 gap-5">
                {CORE_VALUES.map((item, index) => {
                    return (
                        <FadeInDiv
                            key={index}
                            className="p-5 hover-scale hover:bg-slate-900 rounded-lg h-full"
                            delay={0.2 * (index + 2)}
                        >
                            <div className="p-3">
                                <FontAwesomeIcon icon={item.icon} size="3x" />
                            </div>
                            <h3 className="py-3">{item.name}</h3>
                            <div className="text-white/80">
                                {item.description}
                            </div>
                        </FadeInDiv>
                    );
                })}
            </div>
        </div>
    );
}
