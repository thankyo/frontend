import React from 'react';
import {connect} from 'react-redux';

const Profile = ({ user }) => {
    return (
        <div>
            <img src={user.thumbnail}/>
        </div>
    )
};

const mapStateToProps = ({ user }) => {
    return { user };
};

const mapDispatchToProps = () => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)