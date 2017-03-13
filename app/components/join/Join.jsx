import React, {Component} from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";

import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
    console.log(response);
}


export default class Join extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="section">
                    <div className="container has-text-centered">
                        <FacebookLogin
                            appId="1867505463531006"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook}
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}