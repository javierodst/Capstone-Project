import React from 'react';
import DashboardMaterial from './DashboardMaterial.js';
import Orders from './Orders';

class Dashboard extends React.Component {

    render(){
        return(
            <div>
                <DashboardMaterial componentToPassDown={<Orders />} name="Dashboard"/>
            </div>
        )
    }
}

export default Dashboard;