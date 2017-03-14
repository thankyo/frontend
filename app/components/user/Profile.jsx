import React, { Component} from 'react';
import {connect} from 'react-redux';

import SmallThankIcon from '../icons/SmallThankIcon';

import { fetchUser } from '../../reducers/user.actions';

class Profile extends Component {
    loadingState() {
        return (
            <div>
                <h1>Loading ...</h1>
            </div>
        )
    }
    profileState(user) {
        let imageStyle = {
            height: "40px",
            width: "40px"
        }
        return (
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image" style={imageStyle}>
                                <img width={96} height={96} src={user.thumbnail} alt="Image"></img>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{user.firstName} {user.lastName}</p>
                            <p className="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a>#css</a> <a>#responsive</a>
                        <br/>
                        <small><SmallThankIcon balance={user.balance}/></small>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        if (this.props.user === undefined) {
            return this.loadingState();
        } else {
            return this.profileState(this.props.user)
        }
    }
}

Profile.propTypes = {
    id: React.PropTypes.string.isRequired,
    user: React.PropTypes.object
};

const mapStateToProps = (state, { id }) => {
    let user = state.user[id];
    return { user };
};

const mapDispatchToProps = (dispatch, { id }) => {
    dispatch(fetchUser(id));
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)