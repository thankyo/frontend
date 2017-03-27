import React, {Component} from "react";
import { Link } from 'react-router';

export default class ProfileMenu extends Component {
    render() {
        return (
            <div className="profile-options">
                <div className="tabs is-fullwidth">
                    <ul>
                        <li className="link is-active"><a><span className="icon"><i className="fa fa-list"></i></span> <span>My Lists</span></a></li>
                        <li className="link"><a><span className="icon"><i className="fa fa-heart"></i></span> <span>My Likes</span></a></li>
                        <li className="link"><a><span className="icon"><i className="fa fa-th"></i></span> <span>My Posts</span></a></li>
                        <li className="link"><a><span className="icon"><i className="fa fa-bookmark"></i></span> <span>My Bookmarks</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
