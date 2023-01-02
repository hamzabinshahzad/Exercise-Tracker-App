import React, { useContext, useEffect } from 'react';
import Activity from './Activity';

import './css/ListActivities.css';

// Context
import { UserActivitiesContext } from '../context/UserActivitesContext';


const ListActivities = () => {
    const user = useContext(UserActivitiesContext);

    return (
        <>
            <ul className="list-group">
                {
                    user.activities.map(activity => {
                        return (
                            <li key={activity.id} className="list-group-item bg-transparent p-0 my-3">
                                <Activity activity={activity} />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default ListActivities;