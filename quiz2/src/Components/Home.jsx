import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Home.css'

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h1 className="heading">Awesome Quiz App</h1>
                <Link to="/quiz">
                    <button className="start-button">Start Quiz</button>
                </Link>
            </div>
        )
    }
}

export default HomePage;
