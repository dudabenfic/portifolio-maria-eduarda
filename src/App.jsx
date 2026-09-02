import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Experiencia from "./components/Experiencia";
import Formacao from "./components/Formacao";
import Habilidades from "./components/Habilidades";
import Publicacoes from "./components/Publicacoes";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

import {
    experiencias,
    formacoes,
    habilidades,
    publicacoes
} from "./data/conteudo";


function App() {

    const [darkMode, setDarkMode] = useState(true);

    const [activeSection, setActiveSection] = useState("sobre");


    useEffect(() => {

        const sections = document.querySelectorAll(
            "main section[id]"
        );

        const observer = new IntersectionObserver(
            (entries) => {

                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    )[0];

                if (visibleSection) {
                    setActiveSection(
                        visibleSection.target.id
                    );
                }

            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0.1, 0.25, 0.5]
            }
        );


        sections.forEach((section) => {
            observer.observe(section);
        });


        return () => {
            observer.disconnect();
        };

    }, []);


    return (

        <div
            id="topo"
            className={
                darkMode
                    ? "app dark"
                    : "app light"
            }
        >

            <a
                className="pular-conteudo"
                href="#conteudo"
            >
                Pular para o conteúdo
            </a>


            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />


            <main id="conteudo">

                <Hero />


                <Sobre />


                <Experiencia
                    experiencias={experiencias}
                />


                <Formacao
                    formacoes={formacoes}
                />


                <Habilidades
                    habilidades={habilidades}
                />


                <Publicacoes
                    publicacoes={publicacoes}
                />


                <Contato />

            </main>


            <Footer />

        </div>
    );
}


export default App;