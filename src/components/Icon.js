import React, { Fragment } from "react";
import PropTypes from "prop-types";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCcStripe, faGoogle, faFacebook, faTelegramPlane } from '@fortawesome/fontawesome-free-brands';
import { faTimes, faEdit, faSave, faRegistered, faSync, faSearch, faCompass, faMinusCircle, faPlusCircle, faExclamationCircle, faCheckCircle, faHandPeace, faPlayCircle, faPauseCircle, faCreditCard } from '@fortawesome/fontawesome-free-solid';
import { faSignInAlt, faSignOutAlt, faDollarSign } from '@fortawesome/fontawesome-free-solid';

export function Icon({ className, children }) {
  if (!children) {
    return (
      <span className="is-narrow">
        <span className="icon"><i className={className}/></span>
      </span>
    );
  } else {
    return (
      <span className="is-narrow">
        <span className="icon"><i className={className}/></span>
        <span>{children}</span>
      </span>
    )
  }
}

export const FAIcon = ({ icon, children }) =>{
  if (!children) {
    return (
      <Fragment>
        <span className="icon"><FontAwesomeIcon icon={icon}/></span>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <span className="icon"><FontAwesomeIcon icon={icon}/></span>
        <span>{children}</span>
      </Fragment>
    )
  }
};

export const SaveIcon = ({ children }) => <FAIcon icon={faSave}>{children}</FAIcon>;
export const RegisterIcon = ({ children }) => <FAIcon icon={faRegistered}>{children}</FAIcon>;
export const LoginIcon = ({ children }) => <FAIcon icon={faSignInAlt}>{children}</FAIcon>;
export const RestoreIcon = ({ children }) => <FAIcon icon={faSync}>{children}</FAIcon>;
export const SendIcon = ({ children }) => <FAIcon icon={faTelegramPlane}>{children}</FAIcon>;
export const CreditCardIcon = ({ children }) => <FAIcon icon={faCreditCard}>{children}</FAIcon>;
export const GoogleIcon = ({ children }) => <FAIcon icon={faGoogle}>{children}</FAIcon>;
export const FacebookIcon = ({ children }) => <FAIcon icon={faFacebook}>{children}</FAIcon>;
export const DecrementIcon = ({ children }) => <FAIcon icon={faMinusCircle}>{children}</FAIcon>;
export const IncrementIcon = ({ children }) => <FAIcon icon={faPlusCircle}>{children}</FAIcon>;
export const ErrorIcon = ({ children }) => <FAIcon icon={faExclamationCircle}>{children}</FAIcon>;
export const SuccessIcon = ({ children }) => <FAIcon icon={faCheckCircle}>{children}</FAIcon>;
export const InviteIcon = ({ children }) => <FAIcon className={faHandPeace}>{children}</FAIcon>;
export const USDIcon = ({ children }) => <FAIcon icon={faDollarSign}>{children}</FAIcon>;
export const RefreshIcon = ({ children }) => <FAIcon icon={faSync}>{children}</FAIcon>;
export const SearchIcon = ({ children }) => <FAIcon icon={faSearch}>{children}</FAIcon>;
export const LogOutIcon = ({ children }) => <FAIcon icon={faSignOutAlt}>{children}</FAIcon>;
export const NavigationIcon = ({ children }) => <FAIcon icon={faCompass}>{children}</FAIcon>;
export const StripeIcon = ({ children }) => <FAIcon icon={faCcStripe}>{children}</FAIcon>;
export const InstallIcon = ({ children }) => <FAIcon icon={faPlayCircle}>{children}</FAIcon>;
export const CancelIcon = ({ children }) => <FAIcon icon={faTimes}>{children}</FAIcon>;
export const PendingIcon = ({ children }) => <FAIcon icon={faPauseCircle}>{children}</FAIcon>;

export const EditIcon = ({ children }) => <Icon className="fa fa-edit fa-2x">{children}</Icon>

export const EditButton = ({ children, onClick }) => (
  <a className="loveit-fab" onClick={onClick} style={{ width: 40, height: 40}}>
    <FontAwesomeIcon icon={faEdit} size="lg">{children}</FontAwesomeIcon>
  </a>
);

Icon.propTypes = {
  className: PropTypes.string.isRequired,
};

export function WebStackIcon({ webStack, children }) {
  switch (webStack) {
    case "WordPress":
      return (<Icon className="fa fa-wordpress">{children}</Icon>);
    default:
      return (<Icon className="fa fa-code">{children}</Icon>)
  }
}

WebStackIcon.props = {
  webStack: PropTypes.oneOf(["WordPress", undefined])
};