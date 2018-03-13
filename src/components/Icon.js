import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Logo from "./logo.svg";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faCcStripe,
  faFacebook,
  faGoogle,
  faTelegramPlane,
  faWordpressSimple
} from '@fortawesome/fontawesome-free-brands';
import {
  faCheckCircle,
  faCode,
  faCompass,
  faCreditCard,
  faDollarSign,
  faDownload,
  faExclamationCircle,
  faHandPeace,
  faMinusCircle,
  faPauseCircle,
  faEdit,
  faPlayCircle,
  faPlusCircle,
  faRegistered,
  faSave,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
  faSync,
  faTimes,
  faUniversity
} from '@fortawesome/fontawesome-free-solid';

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

export const FAIcon = ({ icon, children }) => {
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
export const DeleteIcon = ({ children }) => <FAIcon icon={faTimes}>{children}</FAIcon>;
export const PendingIcon = ({ children }) => <FAIcon icon={faPauseCircle}>{children}</FAIcon>;
export const DownloadIcon = ({ children }) => <FAIcon icon={faDownload}>{children}</FAIcon>

export const CreditCardMissing = ({ children }) => (
  <Fragment>
    <span className="icon has-text-danger">
      <FontAwesomeIcon icon={faCreditCard} size="2x"/>
    </span>
    <span className="subtitle">&nbsp;&nbsp;{children}</span>
  </Fragment>
);
export const CreditCardAssociated = ({ children }) => (
  <Fragment>
    <span className="icon has-text-primary">
      <FontAwesomeIcon icon={faCreditCard} size="2x"/>
    </span>
    <span className="subtitle">&nbsp;&nbsp;{children}</span>
  </Fragment>
);

export const PayoutAccountMissing = ({ children }) => (
  <Fragment>
    <span className="icon has-text-danger">
      <FontAwesomeIcon icon={faUniversity} size="2x"/>
    </span>
    <span className="subtitle">&nbsp;&nbsp;{children}</span>
  </Fragment>
);
export const PayoutAccountAssociated = ({ children }) => (
  <Fragment>
    <span className="icon has-text-primary">
      <FontAwesomeIcon icon={faUniversity} size="2x"/>
    </span>
    <span className="subtitle">{children}</span>
  </Fragment>
);

export const EditButton = ({ children, onClick }) => (
  <nav className="level is-mobile">
    <div className="level-left">
      <div className="level-item">
        <a className="button is-primary is-outlined" onClick={onClick}>
          <FAIcon icon={faEdit}>Edit</FAIcon>
        </a>
      </div>
    </div>
  </nav>
);

export function LoveItButton({ isLoved, onLove }) {
  return (
    <nav className="level is-mobile">
      <div className="level-left">
        <div className="level-item">
          <a className="loveit-fab" disabled={isLoved} onClick={onLove}>
            <Logo width={40} height={40} className={isLoved ? "fab-is-loved" : ""}/>
          </a>
        </div>
      </div>
    </nav>
  );
}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
};

export function WebStackIcon({ webStack, children }) {
  switch (webStack) {
    case "WordPress":
      return (<FAIcon icon={faWordpressSimple}>{children}</FAIcon>);
    default:
      return (<FAIcon icon={faCode}>{children}</FAIcon>)
  }
}

WebStackIcon.props = {
  webStack: PropTypes.oneOf(["WordPress", undefined])
};