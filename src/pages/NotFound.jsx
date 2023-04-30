import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="hero">
            <div className="text-centre hero-content">
                <div className="max-w-lg">
                    <h1 className="text-6xl mb-4">Oops!</h1>
                    <p className="mb-4 text-2xl font-light">
                        The page you're looking for doesn't seem to exist.We
                        apologize for the inconvenience. It's possible that the
                        page has been moved, deleted, or never existed in the
                        first place. Please double-check the URL or try
                        searching for the page using our app's search bar.
                    </p>
                    <Link to="/" className="btn btn-primary btn-lg">
                        <FaHome className="mr-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
