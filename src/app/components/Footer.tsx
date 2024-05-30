import React from "react";
import Logo from "./Logo";
import NAV_ITEMS from "../data/navItems";

export default function Footer({ ...props }) {
    return (
        <footer
            className="bg-black text-white w-screen"
            {...props}
        >
            <div className="container flex flex-col md:flex-row gap-5 p-10 justify-between">
                <div>
                    <Logo />
                    {NAV_ITEMS.map((item, index) => {
                        return (
                            <div key={index}>
                                <a href={item.path}>{item.name}</a>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <h3 className="font-medium text-lg">Contact Us</h3>
                    <div>
                        The University of Adelaide
                        <br /> Adelaide, South Australia
                        <br /> 5005 Australia
                    </div>
                </div>
            </div>
        </footer>
    );
}
