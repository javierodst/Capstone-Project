import React from 'react';
import DashboardMaterial from '../Dashboard/DashboardMaterial.js';
import AccountInfo from './AccountInfo.js';
import { withRouter } from 'react-router-dom';

class Account extends React.Component {

    render() {
        return (
            <div>
                <DashboardMaterial name="Your Account Information" componentToPassDown={<AccountInfo />}  />
            </div>
        );
    }
};

export default withRouter(Account);