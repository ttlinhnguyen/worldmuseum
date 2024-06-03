import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { easeInOut, motion } from "framer-motion";

export default function PopUp({ text, ...props }) {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);
    return (
        <>
            <button className="btn-primary" onClick={toggle}>
                {text}
            </button>
            <div
                className={`text-center fixed z-40 top-0 left-0 w-screen h-screen place-content-center ${
                    open ? "block" : "hidden"
                }`}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black/50 "
                    onClick={toggle}
                ></div>
                <motion.div
                    className="relative bg-white rounded-lg md:w-96 w-11/12 mx-auto my-5 p-5 z-40"
                    animate={open ? "open" : "closed"}
                    variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                    transition={{ bounce: 0, ease: easeInOut }}
                >
                    <div className="flex justify-end">
                        <button
                            onClick={toggle}
                            className="flex hover:text-red-500"
                            title="Close"
                        >
                            <FontAwesomeIcon icon={faXmark} size="xl" />
                        </button>
                    </div>
                    <div className="" {...props}></div>
                </motion.div>
            </div>
        </>
    );
}
