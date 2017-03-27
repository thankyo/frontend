import React, {Component} from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ProfileMenuItem extends Component {
    render() {
        return (
            <li className={this.props.active ? "link is-active" : "link"}>
                <Link to={this.props.pathname}><span className="icon"><i className={this.props.icon}/></span> <span className='is-hidden-mobile'>{this.props.text}</span></Link>
            </li>
        )
    }
};

const ProfileMenu = ({ menu }) => {
    return (
        <div className="profile-options">
            <div className="tabs is-fullwidth">
                <ul>
                    {menu.my.map(item => <ProfileMenuItem key={item.pathname} {...item} />)}
                </ul>
            </div>
        </div>
    )
};

const mapStateToProps = ({ menu }) => {
    return {
        menu
    };
};

export default connect(
    mapStateToProps,
    undefined
)(ProfileMenu);
