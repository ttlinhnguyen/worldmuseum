import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    </div>
                );
            })}
        </div>
    );
}
