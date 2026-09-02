import CardHabilidade from "./CardHabilidade";

function Habilidades({ habilidades }) {
    return (
        <section id="habilidade">
            <h2>Principais Habilidades</h2>

            <div className="habilidades-grid">
                {habilidades.map((habilidade) => (
                    <CardHabilidade
                        key={habilidade.titulo}
                        titulo={habilidade.titulo}
                        icone={habilidade.icone}
                        descricao={habilidade.descricao}
                    />
                ))}
            </div>
        </section>
    );
}

export default Habilidades;