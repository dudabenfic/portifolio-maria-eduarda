function Formacao({ formacoes }) {
    return (
        <section id="formacao">
            <h2>Formação acadêmica</h2>

            <div className="formacoes">
                {formacoes.map((formacao) => (
                    <div
                        className="formacao"
                        key={formacao.instituicao}
                    >
                        <h3>{formacao.instituicao}</h3>

                        <p>{formacao.curso}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Formacao;