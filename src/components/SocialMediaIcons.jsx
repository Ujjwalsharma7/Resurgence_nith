import React from "react";
import "./SocialMediaIcons.css";
import github from '../assets/images/github.png'


export default function Socials() {
    return (
        <>
            <div className="social-menu">
                <ul>
                    <li>
                        <a href="https://github.com/sanketbodke" target="blank">
                        <img src={github} alt="" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/imsanketbodke/"
                            target="blank"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/sanket-bodake-995b5b205/"
                            target="blank"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/sanketbodke">
                            <i className="fab fa-codepen" target="blank" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
