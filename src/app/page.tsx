import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Solutions from "./components/Solutions";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Home() {
    return (
        <>
            <Nav />
            <main className="">
                <Banner />
                <Solutions />
            </main>
            <Footer />
        </>
    );
}
