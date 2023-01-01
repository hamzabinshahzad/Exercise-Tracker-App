import React, { useState } from 'react';

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

    const addNewActivity = (newActivity) => {
        if(sendActivity(newActivity)) setActivities(activities => [...activities, newActivity]);
    }

    const deleteActivity = (id) => {
        let activityIndex = activities.findIndex(activity => activity.id === id);
        let changedActivities = [...activities];
        changedActivities.splice(activityIndex, 1);
        setActivities(changedActivities);
    }

    const deleteAllActivities = () => {
        setActivities([]);
    }
    
    const updateActivity = (tempObj, id) => {
        let activityIndex = activities.findIndex(curr_activity => curr_activity.id === id);
        let activity = activities[activityIndex];

        activity.name = tempObj.name;
        activity.type = tempObj.type;
        activity.duration = tempObj.duration;
        activity.date = tempObj.date;
        activity.description = tempObj.description;

        setIsUpdateId(-1);
    }

    const superSet = {
        activities,
        isUpdateId,
        updateId,
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