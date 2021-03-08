import React from 'react';
import DashboardMaterial from '../Dashboard/DashboardMaterial.js';
import LastWeekInfo from './LastWeekInfo.js';
import { withRouter } from 'react-router-dom';

class LastWeek extends React.Component {

    render() {
        return (
            <div>
                <DashboardMaterial name="Saved Footage from Last Week" componentToPassDown={<LastWeekInfo />} />
            </div>
        );
    }
};

export default withRouter(LastWeek);