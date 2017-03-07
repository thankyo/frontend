import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {activateMenu} from "../reducers/menu.actions";

class NavigationItem extends Component {
    render() {
        return (
            <Link to={this.props.item.path} className={this.props.item.active ? "nav-item is-active" : "nav-item"}>
                {/*<span className="icon">*/}
                    {/*<i className={this.props.item.icon}></i>*/}
                {/*</span>*/}
                <span>{this.props.item.text}</span>
            </Link>
        );
    }
}

const Navigation = ({menu, onActivate}) => {
    return (
        <nav className="nav">
            <div className="nav-left">
                <div className="nav-item">
                    <Link to="/">
                            <span className="icon">
                                <i className="fa fa-heart-o"></i>
                            </span>
                    </Link>
                </div>
            </div>

            <span className={menu.active ? "nav-toggle is-active" : "nav-toggle"} onClick={onActivate}>
                <span></span>
                <span></span>
                <span></span>
            </span>

            <div id="nav-menu" className={menu.active ? "nav-right nav-menu is-active" : "nav-right nav-menu"}>
                {menu.items.map((item) =>
                    <NavigationItem
                        key={item.path}
                        item={item}
                    />
                )}
            </div>
        </nav>
    );
};

const mapStateToProps = ({menu}) => {
    return {
        menu
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onActivate: () => {
            dispatch(activateMenu())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);