function CardHabilidade({ titulo, descricao, icone }) {
    return (
        <article className="card-habilidade">
            <span>{icone}</span>

            <h3>{titulo}</h3>

            <p>{descricao}</p>
        </article>
    );
}

export default CardHabilidade;