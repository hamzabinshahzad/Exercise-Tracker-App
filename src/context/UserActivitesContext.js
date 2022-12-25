import React, { useState } from 'react';

export const UserActivitiesContext = React.createContext();

export const UserActivitesProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);
    const [isUpdateId, setIsUpdateId] = useState(null);

    const updateId = (id) => {
        setIsUpdateId(id);
    }

    const addNewActivity = (newActivity) => {
        setActivities(activities => [...activities, newActivity]);
    }

    const deleteActivity = (id) => {
        let activityIndex = activities.findIndex(activity => activity.id === id);
        activities.splice(activityIndex, 1);
    }
    
    // const updateActivity = (activity) => {
    //     let activityIndex = activities.findIndex(activity => activity === id);

    // }

    const superSet = {
        activities,
        isUpdateId,
        updateId,
        addNewActivity,
        deleteActivity
    }

    return (
        <UserActivitiesContext.Provider value={superSet}>
            {children}
        </UserActivitiesContext.Provider>
    );
}