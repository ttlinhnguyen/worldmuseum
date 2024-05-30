import React from "react";

export default function Logo({ className = "", ...props }) {
    return (
        <h1 className={`text-3xl font-medium ${className}`} {...props}>
            World Museum
        </h1>
    );
}
