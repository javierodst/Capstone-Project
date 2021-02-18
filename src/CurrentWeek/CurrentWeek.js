import React from 'react';
import DashboardMaterial from '../Dashboard/DashboardMaterial.js';
import CurrentWeekInfo from './CurrentWeekInfo.js';
import { withRouter } from 'react-router-dom';

class CurrentWeek extends React.Component {

    render() {
        return (
            <div>
                <DashboardMaterial name="Saved Footage from Current Week" componentToPassDown={<CurrentWeekInfo />}  />
            </div>
        );
    }
};

export default withRouter(CurrentWeek);