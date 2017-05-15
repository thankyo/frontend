import React, {Component} from "react";
import Introduction from "./Introduction";

import authService from '../../service/auth';

export default class CreatorIntroduction extends Component{
    render() {
        let user = authService.getUserIdentity();
        return (
            <Introduction user={user}>
                <h1 className="title is-1">Welcome {user.firstName}!</h1>
                <h2 className="title is-2">You've just got bragging rights.</h2>
                <h3 className="title is-3">From now on, you can say you were the first one on LoveIt.</h3>
            </Introduction>
        );
    }
};
