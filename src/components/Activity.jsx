import React from 'react'
import './css/Activity.css';

const Activity = () => {
    return (
        <div className="col-sm-12 col-lg-12">
            <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row ">
                        <div className="icon"> <img src="img/home/icons8-exercise-100.png" alt="" /></div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0 mt-1">Running</h6> <span style={{ backgroundColor: "#00B8A9", padding: "2px 5px", borderRadius: "5px", color: "white", fontWeight: "600", textTransform: "uppercase" }}>Run</span>
                        </div>
                    </div>
                    <div className="badge"> <span>20 Minutes</span>

                    </div>

                </div>
                <div className="mt-1">
                    <span className="mt-4 text1">11 December 2022</span>
                    <h6 className="heading mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor deleniti aliquam
                        natus nulla. Iste vel tempore delectus deserunt accusamus, expedita pariatur repellendus sunt, nam
                        eligendi laborum natus cupiditate, dolores neque.
                    </h6>
                    <div className="mt-4 d-flex justify-content-between">
                        <button className="card-btn btn btn-outline-success">UPDATE</button>
                        <button className="card-btn btn btn-outline-danger">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;