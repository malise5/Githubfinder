import React from "react";
import { FaGithub } from "react-icons/fa";

function About() {
    return (
        <div>
            <h1 className="text-6xl mb-4">About us</h1>
            <p className="mb-4 text-2xl font-light">
                Welcome to GitHub Finder! Our app is designed to help you easily
                search for GitHub users and view their profiles and
                repositories. With GitHub Finder, you can quickly and easily
                discover new developers to follow and connect with. Whether
                you're a seasoned developer or just getting started, our app
                makes it easy to find the people and projects that matter most
                to you. To get started, simply enter a username or keyword into
                the search bar and our app will do the rest. You can browse
                through user profiles, view their repositories, and even follow
                them directly from within the app. We're committed to providing
                the best possible experience for our users, so if you have any
                feedback or suggestions for how we can improve the app, please
                don't hesitate to get in touch. We'd love to hear from you!
                Thank you for choosing GitHub Finder, and happy browsing!
            </p>
            <p className="text-lg text-gray-400">
                Version <span className="text-white">1.0.0</span>
            </p>
            <p className="text0lg text-gray-400">
                <a href="https://github.com/malise5" className="text-white">
                    <FaGithub className="inline pr-2 text-3xl" />
                </a>{" "}
                Halkano Malise
            </p>
        </div>
    );
}

export default About;
