function Contato() {
    function enviarFormulario(e) {
        e.preventDefault();

        const nome = e.target.nome.value;
        const email = e.target.email.value;
        const mensagem = e.target.mensagem.value;

        const assunto = `Contato pelo portfólio - ${nome}`;

        const corpo = `Olá, Maria Eduarda!

Meu nome é ${nome}.
Meu e-mail é: ${email}

${mensagem}`;

        window.location.href =
            `mailto:maria.g@aln.senaicimatec.edu.br?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    }

    return (
        <section id="contato-form">
            <h2>Entre em contato</h2>

            <form onSubmit={enviarFormulario}>
                <div className="campo-formulario">
                    <label htmlFor="nome">Nome</label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        required
                    />
                </div>

                <div className="campo-formulario">
                    <label htmlFor="email">E-mail</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        required
                    />
                </div>

                <div className="campo-formulario">
                    <label htmlFor="mensagem">Mensagem</label>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                        placeholder="Escreva sua mensagem..."
                        rows="6"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="botao-enviar"
                >
                    Enviar mensagem
                </button>
            </form>
        </section>
    );
}

export default Contato;