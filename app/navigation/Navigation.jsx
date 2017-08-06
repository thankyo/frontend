import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from '../reducers/auth.actions';
import { setMode } from '../reducers/menu';
import Brand from '../pages/components/Brand';
import { browserHistory, Link } from 'react-router';
import Icon from "../pages/components/Icon";

function LogoutButton({ logout }) {
  return (
    <div className="button is-info is-outlined is-hovered" onClick={logout}>
      <Icon fa="sign-out" text="Out"/>
    </div>
  )
}

function NavigationItem({ item: { text, active, pathname } }) {
  return (
    <Link to={pathname} className={active ? "nav-item is-active" : "nav-item"}>
      <span>{text}</span>
    </Link>
  );
}

function ModeItem({ name, icon, isActive, setMode }) {
  return (
    <div className="control" onClick={() => !isActive && setMode(name)}>
      <div className={isActive ? "button is-active" : "button"}>
        <span className="icon">
            <i className={icon}></i>
        </span>
        <span>{name}</span>
      </div>
    </div>
  )
}

class Navigation extends Component {
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
                    return (<ModeItem key={mode.name} {...mode} setMode={setMode}/>);
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
      dispatch(setMode(name))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);