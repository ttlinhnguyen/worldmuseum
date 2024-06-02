import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Why from "./components/Why";
import CoreValues from "./components/CoreValues";
import SolutionDetails from "./components/SolutionDetails";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
    return (
        <>
            <Nav />
            <main className="">
                <Hero />
                <Why />
                <CoreValues />
                <SolutionDetails />
            </main>
            <Footer />
        </>
    );
}
