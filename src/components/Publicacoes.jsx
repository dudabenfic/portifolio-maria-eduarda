function Publicacoes({ publicacoes }) {

    const publicacoesPorAno = publicacoes.reduce((grupos, publicacao) => {
        const ano = publicacao.evento.slice(-4);

        if (!grupos[ano]) {
            grupos[ano] = [];
        }

        grupos[ano].push(publicacao);

        return grupos;
    }, {});

    return (
        <section id="publicacoes">

            <h2>Publicações e Eventos</h2>

            <div className="timeline-publicacoes">

                {Object.entries(publicacoesPorAno)
                    .reverse()
                    .map(([ano, itens]) => (

                        <div className="grupo-ano" key={ano}>

                            <div className="ano">
                                {ano}
                            </div>

                            <div className="linha-timeline">

                                {itens.map((publicacao) => (

                                    <article
                                        className="publicacao"
                                        key={publicacao.titulo}
                                    >

                                        <span className="ponto-timeline"></span>

                                        <div className="publicacao-conteudo">

                                            <h3>
                                                {publicacao.titulo}
                                            </h3>

                                            <p>
                                                {publicacao.evento.replace(
                                                    ` — ${ano}`,
                                                    ''
                                                )}
                                            </p>

                                        </div>

                                    </article>

                                ))}

                            </div>

                        </div>

                    ))}

            </div>

        </section>
    );
}

export default Publicacoes;