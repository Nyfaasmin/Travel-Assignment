import React from 'react';
import './secondcss.css';
import tokyoImage from './tokyo.jpg';
import bflightImage from './bflight.jpeg';

function SecondPage() {
    return (
        <div className="container">
            {/* Header Section */}
            <header>
                <p>Hello Chhavi!<br/><span>Ready for the trip?</span></p>
                <button className="circle-btn">C</button>
            </header>

            {/* Upcoming Trip Section */}
            <section className="trip-card">
                <div className="trip-details">
                    <h2>TOKYO</h2>
                    <p>27.01.2025 - 02.02.2025</p>
                    <div className="info-row">
                        <span>🕒 8 Days</span>
                        <span>✈️ 4 (2M, 2F)</span>
                        <span>🎒 14 Activities</span>
                    </div>
                </div>
            </section>

            {/* Flight Details */}
            <section className="flight-card">
                <p className="small-title">Flight Details</p>
                <div className="flight-content">
                    <p>DEL, India ✈️ NRT, Narita Tokyo</p>
                    <span>26.01.2025, 10:50 AM</span>
                </div>
            </section>

            {/* Accommodation Section */}
            <div className="section-header">
                <p>Accommodation</p>
                <a href="#">See all</a>
            </div>

            <div className="scroll-container">
                <div className="hotel-card">
                    <img src={tokyoImage} alt="Shinagawa Prince Hotel" />
                    <div className="hotel-info">
                        <p className="hotel-name">Shinagawa Prince Hotel</p>
                        <p>Check in: 26.01.2025, 11:15 PM<br/>Check out: 28.01.2025, 11:15 AM</p>
                        <p>2 Nights <span className="status confirmed">✔ Confirmed</span></p>
                    </div>
                </div>

                <div className="hotel-card">
                    <img src={tokyoImage} alt="Mercure Tokyo Hotel" />
                    <div className="hotel-info">
                        <p className="hotel-name">Mercure Tokyo Hotel</p>
                        <p>Check in: 28.01.2025, 12:00 PM<br/>Check out: 30.01.2025, 12:00 PM</p>
                        <p>2 Nights <span className="status pending">⏳ Pending</span></p>
                    </div>
                </div>
            </div>

            {/* Activities Section */}
            <div className="activities-section">
                <div className="section-header">
                    <p>Activities</p>
                    <a href="#">See all</a>
                </div>

                <div className="day-plan">
                    <button className="day-btn selected">Day Plan</button>
                    <button className="activity-count">14 Activities</button>
                </div>

                <div className="day-scroll">
                    <div className="day-tab active"><span className="day">MON</span><span className="date">27</span></div>
                    <div className="day-tab"><span className="day">TUE</span><span className="date">28</span></div>
                    <div className="day-tab"><span className="day">WED</span><span className="date">29</span></div>
                    <div className="day-tab"><span className="day">THU</span><span className="date">30</span></div>
                    <div className="day-tab"><span className="day">FRI</span><span className="date">31</span></div>
                    <div className="day-tab"><span className="day">SAT</span><span className="date">01</span></div>
                </div>

                <p className="day-label">Day 1 | 27.01.2025 <span className="green-text">3 Activities</span></p>

                <div className="activity-card">
                    <img src={bflightImage} alt="Senso-ji Temple" />
                    <div className="activity-info">
                        <h4>Senso-ji Temple & Nakamise Shopping Street</h4>
                        <p><b>Timing:</b> 6:15 AM Morning<br/>
                        <b>Duration:</b> 3 Hours<br/>
                        <b>Pick up:</b> From Hotel</p>
                    </div>
                </div>

                <div className="activity-card">
                    <img src={tokyoImage} alt="Tokyo Sky Tree" />
                    <div className="activity-info">
                        <h4>Tokyo Sky Tree</h4>
                        <p><b>Timing:</b> 1:00 PM Afternoon<br/>
                        <b>Duration:</b> 3 Hours<br/>
                        <b>Pick up:</b> From Nakamise Street</p>
                    </div>
                </div>

                <div className="activity-card">
                    <img src={tokyoImage} alt="Kimono Wearing" />
                    <div className="activity-info">
                        <h4>Kimono Wearing</h4>
                        <p><b>Timing:</b> Anytime before 6:00 PM<br/>
                        <b>Pick up:</b> From Hotel</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondPage;
