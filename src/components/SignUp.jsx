import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './css/SignUp.css';
import setBodyColor from '../setBodyColor';


const SignUp = () => {
    setBodyColor({ color: "#263159" });
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitRegisteration = (e) => {
        e.preventDefault();
        let newUser = {
            "firstname": firstName,
            "lastname": lastName,
            "email": email,
            "password": password
        };

        createUser(newUser);
        cleanupForm();
    }

    const cleanupForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        document.getElementById("confirmPasswordInput").value = "";
    }

    const createUser = async (newUser) => {
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        };

        try {
            let rawData = await fetch("https://good-lime-meerkat-hat.cyclic.app/register", options);
            let data = await rawData.json();
            alert("Registeration Successful! Click OK to proceed to signin page.");
            navigate("/signin");
        } catch (e) {
            alert("Your Registration failed due to a network error, please try again later.");
        }
    }

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div id='signup-main-row' className="row d-flex  justify-content-center h-100 shadow  mb-5 bg-white rounded">

                        <div className="col-md-8 col-lg-7 col-xl-6 image-col d-flex align-items-center">
                            <img src="img/signup/reg.png" className="img-fluid" alt="Phone " />
                        </div>

                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 form-col d-flex align-items-center">
                            <form className="form needs-validation" onSubmit={submitRegisteration}>
                                <img id='signin-logo' src="img/common/Exercise Tracker Logo-4-new-2-alt.png" alt="" />
                                {/* Name input */}
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="firstNameInput" >First Name</label>
                                    <input type="text" id="firstNameInput" value={firstName} className="form-control" maxLength="25" required onChange={(e) => setFirstName(e.target.value)} />
                                    <div className="valid-feedback">Looks good!</div>
                                </div>

                                <div className="form-outline">
                                    <label className="form-label" htmlFor="lastNameInput">Last Name</label>
                                    <input type="text" id="lastNameInput" value={lastName} className="form-control" maxLength="25" required onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="emailNameInput">Email address</label>
                                    <input type="email" id="emailNameInput" value={email} className="form-control" maxLength="25" required onChange={(e) => setEmail(e.target.value)} />

                                </div>

                                {/* Password input */}
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="passwordInput">Password</label>
                                    <input type="password" id="passwordInput" value={password} className="form-control" maxLength="25" required onChange={(e) => setPassword(e.target.value)} />

                                </div>
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="confirmPasswordInput">Confirm Password</label>
                                    <input type="password" id="confirmPasswordInput" className="form-control" maxLength="25" required />

                                </div>

                                {/* submitButton */}
                                <button type="submit" className="btn btn-outline-success">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;