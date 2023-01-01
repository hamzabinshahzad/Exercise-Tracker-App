import React from 'react';
import { Link } from 'react-router-dom';

import './css/Landing.css';

const Landing = () => {
    return (
        <section id='landing-section' className="vh-100 section">
            <div className="container-fluid">
                <div id='landing-main-row' className="row">
                    {/* left */}
                    <div className="col-5">
                        <div className="row mt-4 pt-0 d-flex align-items-center">
                            <div className="col d-flex align-items-center justify-content-center">
                                {/* logo */}
                                <img id="landing-logo" src="img/common/Exercise Tracker Logo-4.png" alt="" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div id="landing-quote" className="col d-flex align-items-center justify-content-center">
                                {/* text */}
                                <div>
                                    <h2>“The body achieves what the mind</h2>
                                    <h2 id='landing-believes'>believes.”</h2>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-5 pt-5 mt-5'>
                                <Link to={'/signin'}>
                                    <button className='btn btn-secondary'>Sign In</button>
                                </Link>
                                <Link to={'/signup'}>
                                    <button className='btn btn-success'>Sign Up</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="col-7 d-flex align-items-center justify-content-center">
                        <div id='landing-animation-card' className='card d-flex align-items-center'>
                            <img id='landing-animation-gif' src="gif/landing-animation.gif" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
