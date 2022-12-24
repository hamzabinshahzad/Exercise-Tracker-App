import React from 'react';
import './css/NewActivityModal.css';

const NewActivityModal = () => {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header p-0">
                        <img src="img/modal/activity.jpg" className="image-fluid" alt="" srcset="" style={{width: "498px", height: "auto", borderRadius: "7px"}} />
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <form action="">
                                <div className="col6">
                                    <h6>Activity Name</h6>
                                    <input type="text" placeholder="Enter Activity Name" required="true" className="form-control" />
                                    <h6>Activity type</h6>

                                    <select className="form-select">
                                        <option value="">Run</option>
                                        <option value="">Bicycle Ride</option>
                                        <option value="">Swim</option>
                                        <option value="">Walk</option>
                                        <option value="">Hike</option>
                                    </select>

                                    <h6>Duration</h6>
                                    <input type="text" placeholder="Enter Duration time" required="true" className="form-control" />
                                </div>

                                <div className="col-6">
                                    <h6>Date</h6>
                                    <input type="Date" required="true" className="form-control" />

                                    <h6>Description</h6>
                                    <textarea name="" id="" cols="30" rows="5" className="form-control" maxlength="100"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-between" style={{backgroundColor: "#d1dedf"}}>
                        <button type="button" className="btn" data-bs-dismiss="modal" style={{backgroundColor: "#263159", color: "white", borderRadius: "25px"}}>Add Activity</button>
                        <button type="button" className="btn" data-bs-dismiss="modal" style={{backgroundColor: "#EB455F", color: "white", borderRadius: "25px"}}>Cancel Activity</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewActivityModal;