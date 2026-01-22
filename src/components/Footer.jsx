import "./Footer.css"
import { FaFacebookF, FaLinkedin, FaInstagram, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>FashionShop</h2>
                    <p>Projeto fictício de e-commerce desenvolvido em React,
                        focado em responsividade e boas práticas.
                    </p>
                </div>

                <div className="footer-contact">
                    <h3>Contato</h3>
                    <p>
                        <FaPhoneAlt /> (11) 99999-9999
                    </p>

                    <p>
                        <FaMapMarkedAlt />
                        Av. Paulista, 1000 - São Paulo - SP
                    </p>
                </div>

                <div className="footer-social">
                    <h3>Redes</h3>
                    <div className="social-icons">
                        <a href="#">
                            <FaFacebookF />
                        </a>
                        <a href="#">
                            <FaLinkedin />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>{new Date().getFullYear()} FashionShop - Projeto para portfólio</p>
            </div>
        </footer>
    )
}


export default Footer;