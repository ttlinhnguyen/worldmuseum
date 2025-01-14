import React from "react";
import WHY from "../data/whyItems";
import FadeInDiv from "./FadeInDiv";

export default function Why({ ...props }) {
    return (
        <div className="bg-black py-10" {...props}>
            <FadeInDiv className="container sm-container text-white text-center pb-10">
                <h2>Why digitisation?</h2>
            </FadeInDiv>
            <FadeInDiv className="flex overflow-x-scroll snap-mandatory snap-x pb-10 pr-10 gap-10 w-11/12 ml-auto">
                {WHY.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-cover bg-center rounded-lg w-11/12 md:w-96 snap-start flex-scroll-item relative overflow-hidden"
                            style={{
                                backgroundImage: `url("${item.image}")`,
                                height: "35rem",
                            }}
                        >
                            <h3 className="p-5 text-white bg-gradient-to-b from-black/70 to-transparent text-shadow">
                                {item.name}
                            </h3>
                            <div className="absolute bottom-0 text-white/70 bg-black/70 p-2 text-xs">
                                {item.credit}
                            </div>
                        </div>
                    );
                })}
            </FadeInDiv>
        </div>
    );
}
