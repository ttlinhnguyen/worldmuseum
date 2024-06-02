import React from "react";

export default function Logo({ className = "", ...props }) {
    return (
        <div className={`text-3xl font-medium ${className}`} {...props}>
            World Museum
        </div>
    );
}
