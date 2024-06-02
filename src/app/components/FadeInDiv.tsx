"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FadeInDiv({ delay=0.3, ...props }) {
    return (
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{
                ease: "easeInOut",
                delay: delay,
                duration: 0.3,
            }}
            {...props}
        />
    );
}
