import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Logo from "./logo.svg";
import LandingLion from "./icons/landinglion.svg";

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faCcStripe,
  faFacebook,
  faGithub,
  faTwitter,
  faGoogle,
  faTumblr,
  faTelegramPlane,
  faWordpressSimple
} from '@fortawesome/fontawesome-free-brands';
import {
  faCheckCircle,
  faArrowCircleLeft,
  faCode,
  faEnvelope,
  faCreditCard,
  faHandPaper,
  faDollarSign,
  faDownload,
  faTrash,
  faExclamationCircle,
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

const iconFactory = (icon) => ({ children }) => <FAIcon icon={icon}>{children}</FAIcon>

export const SaveIcon = iconFactory(faSave);
export const RegisterIcon = iconFactory(faRegistered);
export const LoginIcon = iconFactory(faSignInAlt);
export const RestoreIcon = iconFactory(faSync);
export const SendIcon = iconFactory(faTelegramPlane);
export const CreditCardIcon = iconFactory(faCreditCard);
export const GitHubIcon = iconFactory(faGithub);
export const GoogleIcon = iconFactory(faGoogle);
export const TumblrIcon = iconFactory(faTumblr);
export const FacebookIcon = iconFactory(faFacebook);
export const EmailIcon = iconFactory(faEnvelope);
export const DecrementIcon = iconFactory(faMinusCircle);
export const IncrementIcon = iconFactory(faPlusCircle);
export const ErrorIcon = iconFactory(faExclamationCircle);
export const SuccessIcon = iconFactory(faCheckCircle);
export const USDIcon = iconFactory(faDollarSign);
export const CheckedIcon = iconFactory(faCheckCircle);
export const RefreshIcon = iconFactory(faSync);
export const SearchIcon = iconFactory(faSearch);
export const LogOutIcon = iconFactory(faSignOutAlt);
export const StripeIcon = iconFactory(faCcStripe);
export const InstallIcon = iconFactory(faPlayCircle);
export const DibsIcon = iconFactory(faHandPaper);
export const CancelIcon = iconFactory(faTimes);
export const BackIcon = iconFactory(faArrowCircleLeft);
export const DeleteIcon = iconFactory(faTrash);
export const PendingIcon = iconFactory(faPauseCircle);
export const DownloadIcon = iconFactory(faDownload);
export const EditIcon = iconFactory(faEdit);

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

export function LoveItButton({ isLoved, thank, onLove }) {
  return (
    <div className="is-flex">
      <a className="is-one-quarter loveit-fab is-unselectable" onClick={onLove}>
        <Logo width={40} height={40} className={isLoved ? "fab-is-loved" : ""}/>
      </a>
      <div className="is-three-quarters is-unselectable" style={{ paddingLeft: 10, paddingTop: 10 }}>
        {thank.given}
      </div>
    </div>
  );
}

const WordPressIcon = iconFactory(faWordpressSimple);
const OtherIcon = iconFactory(faCode);

export function WebStackIcon({ webStack, children }) {
  switch (webStack) {
    case "WordPress":
      return (<WordPressIcon>{children}</WordPressIcon>);
    case "Tumblr":
      return (<TumblrIcon>{children}</TumblrIcon>);
    case "LandingLion":
      return (
        <Fragment>
          <span className="icon"><LandingLion/></span>
          <span>{children}</span>
        </Fragment>
      );
    default:
      return (<OtherIcon>{children}</OtherIcon>)
  }
}

export function WebStackImage({ webStack, size, color }) {
  switch (webStack) {
    case "WordPress":
      return (<FontAwesomeIcon icon={faWordpressSimple} size={size} color={color}/>);
    case "Tumblr":
      return (<FontAwesomeIcon icon={faTumblr} size={size} color={color}/>);
    case "LandingLion":
      return (<LandingLion/>);
    default:
      return (<FontAwesomeIcon icon={faCode} size={size} color={color}/>)
  }
}

WebStackIcon.props = {
  webStack: PropTypes.oneOf(["WordPress", "Tumblr", undefined])
};