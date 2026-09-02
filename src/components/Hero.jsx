function Hero() {
    return (
        <section id="hero">
            <div className="hero-texto">
                <p className="hero-subtitulo">
                    OLÁ, EU SOU
                </p>

                <h1>
                    Maria Eduarda
                    <br />
                    Benfica Gonçalves
                </h1>

                <p className="hero-descricao">
                    Estudante de Engenharia da Computação,
                    com experiência em tecnologia, inteligência
                    artificial, marketing e pesquisa.
                </p>

                <div className="hero-botoes">
                    <a href="#contato-form">
                        Entre em contato
                    </a>

                    <a
                        href="https://www.linkedin.com/in/maria-eduarda-benfica/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="hero-imagem">
                <img
                    src="/maria-eduarda.jpg"
                    alt="Maria Eduarda Benfica Gonçalves"
                />
            </div>
        </section>
    );
}

export default Hero;