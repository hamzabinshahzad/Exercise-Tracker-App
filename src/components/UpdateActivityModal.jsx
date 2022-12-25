import React, { useContext, useEffect, useState } from 'react';
import './css/ActivityModal.css';

// Context
import { UserActivitiesContext } from '../context/UserActivitesContext';

const UpdateActivityModal = () => {
    const user = useContext(UserActivitiesContext);

    const [activityName, setActivityName] = useState("");
    const [activityType, setActivityType] = useState("Run");
    const [activityDuration, setActivityDuration] = useState("");
    const [activityDate, setActivityDate] = useState("");
    const [activityDescription, setActivityDescription] = useState("");

    useEffect(() => {
        if(user.isUpdateId !== null) {
            let activityIndex = user.activities.findIndex(activity => activity.id === user.isUpdateId);
            alert(activityIndex);
            setActivityName(user.activities[activityIndex].name);
            setActivityName(user.activities[activityIndex].type);
            setActivityName(user.activities[activityIndex].duration);
            setActivityName(user.activities[activityIndex].date);
            setActivityName(user.activities[activityIndex].description);
        } 
    }, [user.isUpdateId]);

    const newActivityFormSubmit = (e) => {
        e.preventDefault();
        const newActivityObj = {
            id: Math.floor(Math.random() * 1000), // int
            name: activityName, // str
            type: activityType, // int
            duration: activityDuration, // str
            date: activityDate, // str
            description: activityDescription // str
        }
        user.addNewActivity(newActivityObj);
        cleanupFields();
    }

    const cleanupFields = () => {
        setActivityName("");
        setActivityType("Run");
        setActivityDuration("");
        setActivityDate("");
        setActivityDescription("");
    }

    return (
        <div className="modal fade" id="UpdateActivityModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <form onSubmit={newActivityFormSubmit}>
                        <div className="modal-header p-0">
                            <img src="img/modal/activity.jpg" className="image-fluid" alt="" srcSet='' style={{ width: "498px", height: "auto", borderRadius: "7px" }} />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col6">
                                    <h6>Activity Name</h6>
                                    <input type="text" placeholder="Enter Activity Name" required className="form-control" value={activityName} onChange={e => setActivityName(e.target.value)} />
                                    <h6>Activity type</h6>

                                    <select className="form-select" onChange={e => setActivityType(e.target.value)}>
                                        <option value="Run">Run</option>
                                        <option value="Bicycle Ride">Bicycle Ride</option>
                                        <option value="Swim">Swim</option>
                                        <option value="Walk">Walk</option>
                                        <option value="Hike">Hike</option>
                                    </select>

                                    <h6>Duration</h6>
                                    <input type="number" placeholder="Enter Duration time in minutes" min={1} required className="form-control" value={activityDuration} onChange={e => setActivityDuration(e.target.value)}/>
                                </div>

                                <div className="col-6">
                                    <h6>Date</h6>
                                    <input type="Date" required className="form-control" value={activityDate} onChange={e => setActivityDate(e.target.value)} />

                                    <h6>Description</h6>
                                    <textarea name="" id="" cols="30" rows="5" className="form-control" maxLength={100} value={activityDescription} onChange={e => setActivityDescription(e.target.value)} ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-between" style={{ backgroundColor: "#d1dedf" }}>
                            <button type="submit" className="btn" data-bs-dismiss="modal" style={{ backgroundColor: "#263159", color: "white", borderRadius: "25px" }}>Update Activity</button>
                            <button type="button" className="btn" data-bs-dismiss="modal" style={{ backgroundColor: "#EB455F", color: "white", borderRadius: "25px" }}>Cancel Activity</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default UpdateActivityModal;