import React, { useContext, useState } from 'react';

export const UserActivitiesContext = React.createContext();


export const UserActivitesProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);
    const [isUpdateId, setIsUpdateId] = useState(-1);

    const updateId = (id) => {
        setIsUpdateId(id);
    }

    const sendActivity = async (newActivity) => {
        var options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newActivity)
        };

        try {
            await fetch("http://127.0.0.1:5000/activity", options);
            return true;
        } catch (e) {
            alert("Failed to push activity to server, network error!");
           return false;
        }
    }

    const sendDeleteActivity = async (id, userId) => {
        try {
            await fetch(`http://127.0.0.1:5000/deleteactivity/?id=${id}&userid=${userId}`, { method: "DELETE" });
            return true;
        } catch (e) {
            alert("Failed to delete activity from server, network error!");
           return false;
        }
    }

    const sendUpdateActivity = async (tempObj) => {
        var options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(tempObj)
        };

        try {
            await fetch("http://127.0.0.1:5000/updateactivity", options);
            return true;
        } catch (e) {
            alert("Failed to Update activity on server, network error!");
           return false;
        }
    }

    const initializeNewActivity = (newActivity) => {
        setActivities(activities => [...activities, newActivity]);
    }

    const addNewActivity = (newActivity) => {
        if(sendActivity(newActivity)) setActivities(activities => [...activities, newActivity]);
    }

    const deleteActivity = (id, userId) => {
        if(sendDeleteActivity(id, userId)) {
            let activityIndex = activities.findIndex(activity => activity.id === id);
            let changedActivities = [...activities];
            changedActivities.splice(activityIndex, 1);
            setActivities(changedActivities);
        }
    }

    const deleteAllActivities = () => {
        setActivities([]);
    }
    
    const updateActivity = (tempObj, id) => {
        if(sendUpdateActivity(tempObj)) {
            let activityIndex = activities.findIndex(curr_activity => curr_activity.id === id);
            let activity = activities[activityIndex];
    
            activity.name = tempObj.name;
            activity.type = tempObj.type;
            activity.duration = tempObj.duration;
            activity.date = tempObj.date;
            activity.description = tempObj.description;
    
            setIsUpdateId(-1);
        }
    }

    const superSet = {
        activities,
        isUpdateId,
        updateId,
        initializeNewActivity,
        addNewActivity,
        updateActivity,
        deleteActivity,
        deleteAllActivities
    }

    return (
        <UserActivitiesContext.Provider value={superSet}>
            {children}
        </UserActivitiesContext.Provider>
    );
}