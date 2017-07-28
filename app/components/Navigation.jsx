import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from '../reducers/auth.actions';
import { setActive } from '../reducers/menu';
import Brand from './Brand';
import { browserHistory, Link } from 'react-router';
import Icon from "./Icon";

class LogoutButton extends Component {
  render() {
    return (
      <div className="button is-info is-outlined is-hovered" onClick={this.props.logout}>
        <Icon fa="sign-out" text="Out"/>
      </div>
    )
  }
}

class AnonymousNavigation extends Component {
  render() {
    return (
      <nav className="nav is-dark has-shadow">
        <div className="container">
          <Brand/>
          <div className="nav-center">
            <div id="nav-menu" className="nav-right nav-menu">
              {this.props.menu.items.map((item) => <NavigationItem key={item.pathname} item={item}/>)}
            </div>
          </div>
        </div>
      </nav>
    )
  }
};


class NavigationItem extends Component {
  render() {
    return (
      <Link to={this.props.item.pathname} className={this.props.item.active ? "nav-item is-active" : "nav-item"}>
        <span>{this.props.item.text}</span>
      </Link>
    );
  }
}

function ModeItem({ name, icon, isActive, setActive}) {
  return (
    <div className="control" onClick={() => !isActive && setActive(name)}>
      <div className={isActive ? "button is-active" : "button"}>
        <span className="icon">
            <i className={icon}></i>
        </span>
        <span>{name}</span>
      </div>
    </div>
  )
}

class UserNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = { active: false };
    this.handleExpand = this.handleExpand.bind(this)
  }

  handleExpand() {
    this.setState({ active: !this.state.active })
  }

  render() {
    let { logout, setMode } = this.props;
    let { items, modes } = this.props.menu;
    let { active } = this.state;

    return (
      <nav className="nav is-dark has-shadow">
        <div className="container">
          <Brand/>

          <span className={active ? "nav-toggle is-active" : "nav-toggle"} onClick={this.handleExpand}>
              <span></span>
              <span></span>
              <span></span>
          </span>

          <div className="nav-center">
            <div id="nav-menu" className={active ? "nav-right nav-menu is-active" : "nav-right nav-menu"}>
              {
                items.map((item) => (<NavigationItem key={item.pathname} item={item}/>))
              }
            </div>

            <div className="nav-item">
              <div className="field has-addons">
                {
                  modes.map(mode => {
                    return (<ModeItem key={mode.name} {... mode} setActive={setMode}/>);
                    })
                }
              </div>
            </div>
            <div className="nav-item is-black">
              <div className="block">
                <LogoutButton logout={logout}/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const Navigation = ({ menu, logout, setMode }) => {
  if (!menu.enabled) {
    return <AnonymousNavigation menu={menu}/>;
  } else {
    return <UserNavigation menu={menu} logout={logout} setMode={setMode}/>;
  }
};

const mapStateToProps = ({ menu }) => {
  return {
    menu
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      browserHistory.push("/");
      dispatch(logout())
    },
    setMode: (name) => {
      dispatch(setActive(name))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);