import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function PopUp({ text, ...props }) {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);
    return (
        <>
            <button onClick={toggle}>{text}</button>
            <div
                className={`text-center fixed z-50 top-0 left-0 w-screen h-screen place-content-center ${
                    open ? "block" : "hidden"
                }`}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black/50 "
                    onClick={toggle}
                ></div>
                <div className="relative bg-white rounded-lg md:w-96 w-11/12 mx-auto my-5 p-5 z-50">
                    <button
                        onClick={toggle}
                        className="flex btn-danger"
                        title="Close"
                    >
                        <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                    <div className="" {...props}></div>
                </div>
            </div>
        </>
    );
}
