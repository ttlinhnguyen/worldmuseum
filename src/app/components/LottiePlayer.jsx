import React from "react";

export default function LottiePlayer({ src, ...props }) {
    return (
        <dotlottie-player
            src={src}
            background="transparent"
            speed="1"
            loop
            autoplay
            {...props}
        ></dotlottie-player>
    );
}
