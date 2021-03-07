import React from 'react';
import DashboardMaterial from '../Dashboard/DashboardMaterial.js';
import StreamPage from './StreamPage.js';
import { withRouter } from 'react-router-dom';

class StreamHeader extends React.Component {

    render() {
        return (
            <div>
                <DashboardMaterial name="Live Camera Feed" componentToPassDown={<StreamPage />}  />
            </div>
        );
    }
};

export default withRouter(StreamHeader);