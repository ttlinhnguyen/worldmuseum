import React from "react";
import Accordion from "./Accordion";
import FadeInDiv from "./FadeInDiv";

export default function Cost({ ...props }) {
    const COST = [
        {
            title: "3D/2D Imaging Equipment",
            cost: "$70,000",
            description: (
                <>
                    <div className="mb-2">
                        The cost of 3D/2D Imaging equipment includes
                        high-resolution cameras, laser scanners, and specialised
                        software for detailed digital models.
                    </div>
                    <div>
                        Our incentives for this solution are increased virtual
                        tour revenue, reduced wear and tear on physical
                        artefacts, and the ability to attract tech-savvy
                        audiences and partnerships.
                    </div>
                </>
            ),
        },
        {
            title: "AI Recognition Technology",
            cost: "$5,000",
            description: (
                <>
                    <div className="mb-2">
                        The expense of AI recognition technology covers the
                        acquisition of AI software and integration with existing
                        systems.
                    </div>
                    <div>
                        Financial benefits include reduced labour costs for
                        manual cataloging and high accuracy for research
                        purposes.
                    </div>
                </>
            ),
        },
        {
            title: "RFID Technology",
            cost: "$10,800,000",
            description: (
                <>
                    <div className="mb-2">
                        Implementing RFID technology involves the cost of RFID
                        passive tags, stationary and handheld readers, and
                        associated software for tracking RFID tags.
                    </div>
                    <div>
                        The expected outcome is improved inventory management,
                        decreased losses, and enhanced loan and exhibition
                        management.
                    </div>
                </>
            ),
        },
        {
            title: "Labour & Training",
            cost: "$730,000,000",
            description: (
                <>
                    <div className="mb-2">
                        The cost includes hiring skilled personnel to manage and
                        operate new technologies and training existing staff to
                        use these system effectively.
                    </div>
                    <div>
                        Our employees are the core of the digitisation process.
                        By investing in our employees, we not only enhance their
                        skills and job satisfaction but also support the local
                        economy, demonstrating our commitment to being a
                        responsible and community-focused employer.
                    </div>
                </>
            ),
        },
    ];
    return (
        <div className="container py-10 px-10" {...props}>
            <FadeInDiv>
                <h2 className="text-center py-10">Cost of Implementation</h2>
            </FadeInDiv>
            <div className="grid md:grid-cols-6">
                <FadeInDiv className="place-content-center col-span-2">
                    <h3>Total Cost</h3>
                    <div className="text-6xl text-blue-500">$740M</div>
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
