function Header({
    darkMode,
    setDarkMode,
    activeSection,
    setActiveSection
}) {

    const links = [
        {
            id: "sobre",
            label: "Sobre"
        },
        {
            id: "experiencia",
            label: "Experiência"
        },
        {
            id: "formacao",
            label: "Formação"
        },
        {
            id: "habilidade",
            label: "Habilidades"
        },
        {
            id: "publicacoes",
            label: "Publicações"
        },
        {
            id: "contato-form",
            label: "Contato"
        }
    ];


    function navegar(id) {
        setActiveSection(id);

        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior: "smooth"
            });
    }


    return (
        <nav>


            {links.map((link) => (

                <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={
                        activeSection === link.id
                            ? "active"
                            : ""
                    }
                    onClick={(event) => {
                        event.preventDefault();

                        navegar(link.id);
                    }}
                >
                    {link.label}
                </a>

            ))}


            <button
                className="theme-button"
                onClick={() =>
                    setDarkMode(!darkMode)
                }
                aria-label="Alternar tema"
            >
                {darkMode ? "☀️" : "☾"}
            </button>

        </nav>
    );
}


export default Header;