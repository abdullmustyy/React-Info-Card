import React from "react";

export default function Info(props) {
    return (
        <section className="main--info">
            <img src="../images/my-selfie.png" />
            <span className="name">Abdullahi Mustafa</span>
            <span className="career">Full-Stack Developer</span>
            <a href="https://abdullmustyy.netlify.app" className="portfolio">Portfolio</a>
            <div className="button-cont">
                <button><i className="fas fa-envelope"></i><span>Email</span></button>
                <button><i className="linkedin fab fa-linkedin"></i><span>LinkedIn</span></button>
            </div>
        </section>
    )
}