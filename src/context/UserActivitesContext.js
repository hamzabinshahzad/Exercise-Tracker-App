import React, { useState } from 'react';

export const UserActivitiesContext = React.createContext();

export const UserActivitesProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);
    const [isUpdateId, setIsUpdateId] = useState(-1);
    const [isDeleteId, setIsDeleteId] = useState(-1);

    const updateId = (id) => {
        setIsUpdateId(id);
    }

    const addNewActivity = (newActivity) => {
        setActivities(activities => [...activities, newActivity]);
    }

    const deleteActivity = (id) => {
        let activityIndex = activities.findIndex(activity => activity.id === id);
        // setActivities(curr => curr.filter(activities => activities !== id));
        let changedActivities = [...activities];
        changedActivities.splice(activityIndex, 1);
        setActivities(changedActivities);
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
        deleteActivity
    }

    return (
        <UserActivitiesContext.Provider value={superSet}>
            {children}
        </UserActivitiesContext.Provider>
    );
}