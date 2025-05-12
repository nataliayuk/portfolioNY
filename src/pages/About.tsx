import React from 'react'
import '../styles/About.css'

const About: React.FC = () => {
    return (
        <div className="about-container">
            <section className="about">
                <div className="about-text">
                    <h1>
                        <span className="about-title">MY </span>
                        <span className="about-initial">S</span>
                        <span className="about-title">TORY</span>
                    </h1>
                    <h2></h2>
                    <p>Aqui vou contar um pouco sobre minha história e como vim parar aqui para contextualizar um pouco. Talvez adicione alguns elementos mais pessoais, mas sem muitos detalhes desnecessários.</p>
                </div>
            </section>
            <section className="about-image">
            </section>
            <section className="about-2">
                <div className="about-text-2">
                    <h1>
                        <span className="about-initial">G</span>
                        <span className="about-title">OALS</span>
                    </h1>
                    <h2></h2>
                    <p>Explicar um pouco quais são os meus objetivos no momento, para que fique um pouco mais fácil discernir se faz sentido trabalhar comigo.</p>
                </div>
            </section>
            <section className="about">
                <div className="about-text">
                    <h1>
                        <span className="about-initial">V</span>
                        <span className="about-title">ALUES</span>
                    </h1>
                    <h2></h2>
                    <p>Acho legal elencar alguns valores que me movem para que seja mais fácil me conectar com pessoas que se identifiquem comigo.</p>
                </div>
            </section>
        </div>
    )
}
export default About