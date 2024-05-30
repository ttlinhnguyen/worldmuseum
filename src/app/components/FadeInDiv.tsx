"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FadeInDiv({ ...props }) {
    return (
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{
                ease: "easeInOut",
                delay: 0.3,
                duration: 0.3,
            }}
            {...props}
        />
    );
}
