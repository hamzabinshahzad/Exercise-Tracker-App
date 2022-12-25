import React, { useContext } from 'react'
import './css/Activity.css';

// Context
import { UserActivitiesContext } from '../context/UserActivitesContext';


const Activity = ({activity}) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const user = useContext(UserActivitiesContext);

    return (
        <div className="col-sm-12 col-lg-12">
            <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row ">
                        <div className="icon"> <img src={`img/home/Exercise-${activity.type.toLowerCase()}.png`} alt="" /></div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0 mt-1">{activity.name}</h6> <span style={{ backgroundColor: "#00B8A9", padding: "2px 5px", borderRadius: "5px", color: "white", fontWeight: "600", textTransform: "uppercase" }}>{activity.type}</span>
                        </div>
                    </div>
                    <div className="badge"> <span>{`${activity.duration} Minutes`}</span>

                    </div>

                </div>
                <div className="mt-1">
                    <span className="mt-4 text1">{`${activity.date.split('-')[2]} ${months[parseInt(activity.date.split('-')[1]) -1]} ${activity.date.split('-')[0]}`}</span>
                    <h6 className="heading mt-4">{activity.description}</h6>
                    <div className="mt-4 d-flex justify-content-between">
                        <button className="card-btn btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#UpdateActivityModal" onClick={(e) => user.updateId(activity.id)}>UPDATE</button>
                        <button className="card-btn btn btn-outline-danger">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;