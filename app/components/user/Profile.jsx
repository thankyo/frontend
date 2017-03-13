import React from 'react';
import {connect} from 'react-redux';

import { fetchUser } from '../../reducers/users.actions';

const Profile = ({ user }) => {
    if (user !== undefined)
        return (
            <div>
                <img src={user.thumbnail}/>
            </div>
        )
    else
        return (
            <div>
                <h1>Loading ...</h1>
            </div>
        )
};

Profile.propTypes = {
    id: React.PropTypes.string.isRequired,
    user: React.PropTypes.object
};

const mapStateToProps = ({ users }, ownProps) => {
    let id = ownProps.id;
    let user = users[id];
    return { user };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    let id = ownProps.id;
    dispatch(fetchUser(id));
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)