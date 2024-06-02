import React from "react";
import Logo from "./Logo";
import NAV_ITEMS from "../data/navItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ROOT_DIR from "../data/root";

export default function Footer({ ...props }) {
    const SOCIALS = [
        {
            link: `${ROOT_DIR}`,
            icon: faFacebookSquare,
        },
        {
            link: `${ROOT_DIR}`,
            icon: faInstagram,
        },
        {
            link: `${ROOT_DIR}`,
            icon: faLinkedin,
        },
    ];
    return (
        <footer className="bg-black text-white w-screen" {...props}>
            <div className="container flex flex-col md:flex-row gap-5 p-10 justify-between">
                <div>
                    <Logo />
                    <div className="py-3">
                        {NAV_ITEMS.map((item, index) => {
                            return (
                                <div key={index}>
                                    <a href={item.path}>{item.name}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h3 className="font-medium text-lg">Contact Us</h3>
                    <div className="flex gap-5 py-3">
                        {SOCIALS.map((item, index) => {
                            return (
                                <a href={item.link}>
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        size="xl"
                                    />
                                </a>
                            );
                        })}
                    </div>
                    <div className="text-xs py-5">
                        Built with Next.js and Tailwind CSS.
                    </div>
                </div>
            </div>
        </footer>
    );
}
