import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CORE_VALUES from "../data/coreValues";
import FadeInDiv from "./FadeInDiv";

export default function CoreValues({ ...props }) {
    return (
        <div
            className="w-screen bg-black text-white place-content-center text-center py-10"
            {...props}
        >
            <FadeInDiv className="container sm-container">
                <h2>Our Pillars of Innovation</h2>
            </FadeInDiv>
            <div className="container grid md:grid-cols-3 px-5 py-20 gap-5">
                {CORE_VALUES.map((item, index) => {
                    return (
                        <FadeInDiv key={index} delay={0.4 * (index + 2)}>
                            <div className="hover-scale hover:bg-slate-900 p-5 rounded-lg">
                                <div className="p-3">
                                    <FontAwesomeIcon
                                        className="text-blue-500"
                                        icon={item.icon}
                                        size="3x"
                                    />
                                </div>
                                <h3 className="py-3">{item.name}</h3>
                                <div className="text-white/80">
                                    {item.description}
                                </div>
                            </div>
                        </FadeInDiv>
                    );
                })}
            </div>
        </div>
    );
}
