import React from "react";
import NAV_ITEMS from "../data/navItems";
import Logo from "./Logo";
import ROOT_DIR from "../data/root";

export default function Nav() {
    return (
        <div className="relative z-10">
            <nav className="w-screen p-7 mx-auto absolute top-0">
                <div className="flex justify-between container text-white">
                    <div>
                        <a href={ROOT_DIR}>
                            <Logo />
                        </a>
                    </div>
                    <div className="grid grid-cols-3">
                        {NAV_ITEMS.map((item, index) => {
                            return (
                                <div key={index}>
                                    <a href={item.path}>{item.name}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </div>
    );
}
