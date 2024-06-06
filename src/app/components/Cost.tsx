import React from "react";
import Accordion from "./Accordion";
import FadeInDiv from "./FadeInDiv";
import COST from "../data/cost";

export default function Cost({ ...props }) {
    return (
        <div className="container py-10 px-10" {...props}>
            <FadeInDiv>
                <h2 className="text-center py-10">Cost of Implementation</h2>
            </FadeInDiv>
            <div className="grid md:grid-cols-6 gap-5">
                <FadeInDiv className="place-content-center col-span-2">
                    <h3>Total Cost</h3>
                    <div className="text-6xl text-blue-500">$120.7M</div>
                    <div>over the course of 5 years</div>
                </FadeInDiv>
                <FadeInDiv className="col-span-4" delay={0.8}>
                    {COST.map((item, index) => {
                        return (
                            <div key={index} className="py-3">
                                <Accordion
                                    title={
                                        <>
                                            <h3>{item.title}</h3>
                                            <div className="text-2xl text-blue-500">
                                                {item.cost}
                                            </div>
                                        </>
                                    }
                                    content={item.description}
                                />
                            </div>
                        );
                    })}
                </FadeInDiv>
            </div>
        </div>
    );
}
