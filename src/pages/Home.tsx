import React from 'react'
import '../styles/Home.css'
import avatarImg from '../assets/avatar.jpg'
import htmlIcon    from '../assets/html.png'
import cssIcon     from '../assets/css.png'
import jsIcon      from '../assets/js.png'
import reactIcon   from '../assets/react.png'
import tsIcon      from '../assets/ts.png'
import nodeIcon    from '../assets/node.png'
import prismaIcon  from '../assets/prisma.png'
import vsCodeIcon  from '../assets/vscode.png'
import gitIcon     from '../assets/git.png'
import githubIcon  from '../assets/github.png'

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <section className="hero">
                <div className="hero-text">
                    <h1>
                        <span className="hero-initial">N</span>
                        <span className="hero-name">ATALIA YUK</span>
                    </h1>
                    <h2>software engineering student</h2>
                    <p>Aqui vou escrever uma breve apresentação. Estou testando a fonte e os espaçamentos para entender como está ficando visualmente a proporção e a distribuição dos elementos. Quero que fique algo simples e harmônico. Testando a legibilidade e também o contraste. Não sei mais o que escrever para preencher o espaço que separei para essa seção. Ok, já está chegando no final, hehe.</p>
                </div>
                <div className="hero-avatar">
                    {
                        <img src={avatarImg} alt="NYuk" className="avatar-img" />
                    }
                </div>
            </section>
            <section className="technologies">
                <h2>Technologies</h2>
                <div className="tech-category">
                    <h3>// frontend</h3>
                    <div className="tech-chips">
                        <div className="tech-chip">
                            <img src={htmlIcon} alt="HTML" />
                            <span>HTML</span>
                        </div>
                        <div className="tech-chip">
                            <img src={cssIcon} alt="CSS" />
                            <span>CSS</span>
                        </div>
                        <div className="tech-chip">
                            <img src={jsIcon} alt="JavaScript" />
                            <span>JavaScript</span>
                        </div>
                        <div className="tech-chip">
                            <img src={reactIcon} alt="React" />
                            <span>React</span>
                        </div>
                    </div>
                </div>
                <div className="tech-category">
                    <h3>// backend</h3>
                    <div className="tech-chips">
                        <div className="tech-chip">
                            <img src={tsIcon} alt="TypeScript" />
                            <span>TypeScript</span>
                        </div>
                        <div className="tech-chip">
                            <img src={nodeIcon} alt="Node.js" />
                            <span>Node</span>
                        </div>
                        <div className="tech-chip">
                            <img src={prismaIcon} alt="Prisma" />
                            <span>Prisma</span>
                        </div>
                    </div>
                </div>
                <div className ="tech-category">
                    <h3>// tools</h3>
                    <div className="tech-chips">
                        <div className="tech-chip">
                            <img src={vsCodeIcon} alt="VSCode" />
                            <span>VS Code</span>
                        </div>
                        <div className="tech-chip">
                            <img src={gitIcon} alt="Git" />
                            <span>Git</span>
                        </div>
                        <div className="tech-chip">
                            <img src={githubIcon} alt="GitHub" />
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home