import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    const footerYear = new Date().getFullYear();

    return (
        <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
            <div>
                <p>
                    Copyright &copy; {footerYear} all rights reserved {}
                    <Link to="https://github.com/malise5">Kude-Github</Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
