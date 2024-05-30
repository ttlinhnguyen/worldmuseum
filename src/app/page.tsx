import Image from "next/image";
import Nav from "@/app/components/Nav";

export default function Home() {
    return (
        <>
            <Nav />
            <main className="flex min-h-screen flex-col items-center justify-between p-10">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
            </main>
        </>
    );
}
