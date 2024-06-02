import React, { useState } from "react";
import NAV_ITEMS from "../data/navItems";
import Logo from "./Logo";
import ROOT_DIR from "../data/root";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <>
            <div className="relative z-10">
                <nav className="w-screen p-7 mx-auto absolute top-0">
                    <div className="flex justify-between container text-white">
                        <div>
                            <a href={ROOT_DIR}>
                                <Logo />
                            </a>
                        </div>
                        <button onClick={toggle}>
                            <FontAwesomeIcon icon={faBars} size="xl" />
                        </button>
                    </div>
                </nav>
            </div>
            <div
                className={`fixed top-0 left-0 w-screen h-screen z-50 ${
                    open ? "block" : "hidden"
                }`}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black/50 "
                    onClick={toggle}
                ></div>
                <div className="absolute h-full w-96 top-0 right-0 py-5 px-10 bg-white">
                    <div className="flex justify-end">
                        <button onClick={toggle} className="hover:text-red-500">
                            <FontAwesomeIcon icon={faXmark} size="xl" />
                        </button>
                    </div>
                    {NAV_ITEMS.map((item, index) => {
                        return (
                            <a href={item.path} key={index}>
                                <div className="py-3">{item.name}</div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
