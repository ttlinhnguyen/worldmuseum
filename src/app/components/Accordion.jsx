import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Accordion({ title, content }) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    return (
        <div>
            <div
                className="flex justify-between place-content-center cursor-pointer"
                onClick={toggle}
            >
                <div>{title}</div>
                <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
            </div>
            <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    open ? "max-h-screen" : "max-h-0"
                }`}
            >
                <div className="p-4">{content}</div>
            </div>
        </div>
    );
}
