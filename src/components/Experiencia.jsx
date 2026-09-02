function Experiencia({ experiencias }) {
    return (
        <section id="experiencia">
            <h2>Experiência Profissional</h2>

            {experiencias.map((experiencia) => (
                <article key={experiencia.empresa}>
                    <h3>{experiencia.empresa}</h3>

                    <p>{experiencia.cargo}</p>

                    <p className="periodo">
                        {experiencia.periodo}
                    </p>
                </article>
            ))}
        </section>
    );
}

export default Experiencia;