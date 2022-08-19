import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App(props) {
    return (
        <section className="card">
            <main>
                <Info />
                <About />
                <Interests />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    )
}