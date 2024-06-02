import React from "react";
import FadeInDiv from "./FadeInDiv";

export default function OurTeam() {
    const TEAM = [
        {
            name: "Jasper Harding",
        },
        {
            name: "Alana Liebelt",
        },
        {
            name: "Linh Nguyen",
        },
        {
            name: "Samantha Beard",
        },
        {
            name: "Natasha Phillips",
        },
    ];

    return (
        <FadeInDiv className="container text-center mx-auto p-10">
            <div className="text-center py-10">
                <h2>Our Team</h2>
            </div>
            <div className="grid md:grid-cols-3">
                {TEAM.map((item, index) => {
                    return (
                        <div key={index} className="h-20 p-3 hover-scale place-content-center">
                            <div>{item.name}</div>
                        </div>
                    );
                })}
            </div>
        </FadeInDiv>
    );
}
