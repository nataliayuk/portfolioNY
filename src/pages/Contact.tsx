import React from 'react'
import '../styles/Contact.css'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
            <section className="contact-section">
                <div className="contact-content">
                    <h1 className="contact-title">
                        <span className="contact-initial">C</span>
                        <span className="contact-rest">ONTACT</span>
                    </h1>
                    <a
                        href="malito:natalia.yuk@icloud.com"
                        className="contact-email">
                        natalia.yuk@icloud.com
                    </a>
                    <div className="contact-links">
                        <a
                            href="https://www.linkedin.com/in/nataliayuk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-chip"
                        >
                            <img src={linkedinIcon} alt="LinkedIn" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/nataliayuk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-chip"
                        >
                            <img src={githubIcon} alt="GitHub" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="contact-placeholder">
                </div>
            </section>
        </div>
    )
}

export default Contact