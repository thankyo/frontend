import React from 'react';
import {connect} from 'react-redux';

import { fetchUser } from '../../reducers/user.actions';

const Profile = ({ user, fetchUser }) => {
    fetchUser("me");
    return (
        <div>
            <img src={user.thumbnail}/>
        </div>
    )
};

const mapStateToProps = ({ user }) => {
    return { user };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)