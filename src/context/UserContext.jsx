import React, { useState } from 'react';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [authToken, setAuthToken] = useState("");

    const initializeUserDetails = (resData) => {
        setId(resData.user._id);
        setFirstName(resData.user.firstname);
        setLastName(resData.user.lastname);
        setEmail(resData.user.email);
        setAuthToken(resData.auth);
    }


    // const addNewActivity = (newActivity) => {
    //     setActivities(activities => [...activities, newActivity]);
    // }

    // const deleteActivity = (id) => {
    //     let activityIndex = activities.findIndex(activity => activity.id === id);
    //     let changedActivities = [...activities];
    //     changedActivities.splice(activityIndex, 1);
    //     setActivities(changedActivities);
    // }
    
    // const updateActivity = (tempObj, id) => {
    //     let activityIndex = activities.findIndex(curr_activity => curr_activity.id === id);
    //     let activity = activities[activityIndex];

    //     activity.name = tempObj.name;
    //     activity.type = tempObj.type;
    //     activity.duration = tempObj.duration;
    //     activity.date = tempObj.date;
    //     activity.description = tempObj.description;

    //     setIsUpdateId(-1);
    // }

    const superSet = {
        firstName,
        initializeUserDetails
    }

    return (
        <UserContext.Provider value={superSet}>
            {children}
        </UserContext.Provider>
    );
}