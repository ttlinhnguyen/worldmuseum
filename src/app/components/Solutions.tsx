import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import SOLUTIONS from "../data/solutions";

export default function Solutions() {
    return (
        <div className="container grid md:grid-cols-3 mx-auto p-5 gap-5">
            {SOLUTIONS.map((item, index) => {
                return (
                    <div key={index} className="mx-auto p-5 text-center">
                        <div className="p-3">
                            <FontAwesomeIcon icon={item.icon} size="3x" />
                        </div>
                        <div className="text-xl font-medium">{item.name}</div>
                        <div>{item.description}</div>
                        <a href={item.path} title="See more">
                            <FontAwesomeIcon
                                icon={faArrowDown}
                                size="lg"
                                className="p-2"
                            />
                        </a>
                    </div>
                );
            })}
        </div>
    );
}
