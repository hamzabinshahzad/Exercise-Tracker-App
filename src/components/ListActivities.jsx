import React from 'react';
import Activity from './Activity';

import './css/ListActivities.css';

const ListActivities = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item bg-transparent p-0 my-3">
               <Activity /> 
            </li>
            <li className="list-group-item bg-transparent p-0 my-3">
               <Activity /> 
            </li>
            <li className="list-group-item bg-transparent p-0 my-3">
               <Activity /> 
            </li>
        </ul>
    );
}

export default ListActivities