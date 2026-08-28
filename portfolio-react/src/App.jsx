import { useState } from "react";
import "./App.css";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const experiencias = [
        {
            empresa: "Laboratório de Engenharia Óptica e Fotônica",
            cargo: "Bolsista de Pesquisa e Desenvolvimento",
            periodo: "2022 — 2024"
        },
        {
            empresa: "Monk Grupo",
            cargo: "Gestora de Tráfego e Copywriter",
            periodo: "2025 — Presente"
        }
    ];

    const formacoes = [
        {
            instituicao: "Universidade Senai Cimatec",
            curso: "Graduanda de Engenharia da Computação"
        },
        {
            instituicao: "Polytech Nancy",
            curso: "Graduação Sanduíche em curso de Informática, Automação, Robótica e Redes"
        }
    ];

    const habilidades = [
        {
            titulo: "Análise de Dados",
            icone: "📊",
            descricao: "Análise e interpretação de dados para apoiar decisões."
        },
        {
            titulo: "Copywriting",
            icone: "✍️",
            descricao: "Criação e otimização de textos para marketing e vendas."
        },
        {
            titulo: "Automação com IA",
            icone: "🤖",
            descricao: "Aplicação de inteligência artificial para otimizar processos."
        },
        {
            titulo: "Pesquisa Acadêmica",
            icone: "🔬",
            descricao: "Experiência com pesquisa e desenvolvimento tecnológico."
        }
    ];

    const publicacoes = [
        {
            titulo: "Jabuti Project: Maze Solver Micromouse Robot",
            evento: "VIII International Symposium on Innovation and Technology (SIINTEC) — 2022"
        },
        {
            titulo: "Optical Fibers Characterization for Macrobending Sensors",
            evento: "IX International Symposium on Innovation and Technology (SIINTEC) — 2023"
        },
        {
            titulo: "Optical fiber vibration sensor for automated inspection of industrial assets",
            evento: "Latin American Robotics Symposium (LARS) — 2023"
        },
        {
            titulo: "Non-electronic visual system for flexible manipulators",
            evento: "Latin American Robotics Symposium (LARS) — 2023"
        },
        {
            titulo: "FBG-Based Soft Probe for Measurement of Temperature Using Strain Decoupling Technique",
            evento: "X International Symposium on Innovation and Technology (SIINTEC) — 2024"
        }
    ];

    return (
        <div id="topo" className={darkMode ? "app dark" : "app light"}> 

            <a className="pular-conteudo" href="#conteudo">
                Pular para o conteúdo
            </a>

            <nav aria-label="Navegação principal">
                <a href="#sobre">Sobre</a>
                <a href="#experiencia">Experiência</a>
                <a href="#formacao">Formação</a>
                <a href="#habilidade">Habilidades</a>
                <a href="#publicacoes">Publicações</a>
                <a href="#contato">Contato</a>

                <button
                    className="theme-button"
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Alternar entre modo claro e escuro"
                >
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </nav>

            <header>
                <img
                    src="/maria-eduarda.jpg"
                    alt="Maria Eduarda Benfica Gonçalves"
                />

                <div>
                    <h1>Maria Eduarda Benfica Gonçalves</h1>
                    <p className="cargo">
                        Gestora de Tráfego e Copywriter
                    </p>
                </div>
            </header>

            <main id="conteudo">

                <section id="sobre">
                    <h2>Sobre</h2>

                    <p>
                        Atua em uma operação de marketing direto, com experiência
                        em gestão de tráfego, copywriting e aplicação prática de
                        Inteligência Artificial. Utiliza IA como parte do processo
                        de pesquisa, criação e otimização de copies e ofertas,
                        além de desenvolver, em conjunto com a equipe,
                        automações e ferramentas destinadas a simplificar
                        operações e otimizar tarefas do dia a dia. Seu trabalho
                        envolve a busca constante por soluções que aumentem a
                        eficiência dos processos e potencializem os resultados
                        da operação.
                    </p>
                </section>

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

                <section id="habilidade">
                    <h2>Principais Habilidades</h2>

                    <div className="habilidades-grid">
                        {habilidades.map((habilidade) => (
                            <article
                                className="habilidade-card"
                                key={habilidade.titulo}
                            >
                                <span className="habilidade-icone">
                                    {habilidade.icone}
                                </span>

                                <h3>{habilidade.titulo}</h3>

                                <p>{habilidade.descricao}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="publicacoes">
                    <h2>Publicações e Eventos</h2>

                    {publicacoes.map((publicacao) => (
                        <article key={publicacao.titulo}>
                            <h3>{publicacao.titulo}</h3>
                            <p>{publicacao.evento}</p>
                        </article>
                    ))}
                </section>

                <section id="contato-form">
                  <h2>Entre em contato</h2>

                  <form
                      onSubmit={(e) => {
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
                      }}
                  >
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

                      <button type="submit" className="botao-enviar">
                          Enviar mensagem
                      </button>
                  </form>
              </section>

            </main>

            <footer id="contato">
                <h3>Contato</h3>

                <p>
                    <a href="mailto:maria.g@aln.senaicimatec.edu.br">
                        maria.g@aln.senaicimatec.edu.br
                    </a>
                </p>

                <a
                    href="https://www.linkedin.com/in/maria-eduarda-benfica/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>

                <a className="voltar-topo" href="#topo">
                    Voltar ao topo ↑
                </a>
            </footer>

        </div>
    );
}

export default App;

