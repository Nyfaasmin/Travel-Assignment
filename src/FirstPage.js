import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function FirstPage() {
    return (
        <div className="container">
            <h1>Plan Your Journey, Your Way!</h1>
            <p>Let's create your personalised travel experience</p>

            <div className="form-group">
                <label htmlFor="destination">Where would you like to go?</label>
                <input type="text" id="destination" placeholder="Enter Destination" />
            </div>

            <div className="form-group">
                <label htmlFor="duration">How long will you stay?</label>
                <select id="duration">
                    <option>Select Duration</option>
                    <option>1 Week</option>
                    <option>2 Weeks</option>
                    <option>1 Month</option>
                </select>
            </div>

            <div className="form-group">
                <label>Who are you traveling with?</label>
                <div className="options">
                    <button className="option">Solo</button>
                    <button className="option">Couple</button>
                    <button className="option">Family</button>
                    <button className="option">Friends</button>
                </div>
                <Link to="/second">
                    <button className="continue">Continue</button>
                </Link>
            </div>
        </div>
    );
}

export default FirstPage;
