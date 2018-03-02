import React from "react";
import PropTypes from "prop-types";

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

export const SaveIcon = ({ children }) => <Icon className="fa fa-save">{children}</Icon>;
export const RegisterIcon = ({ children }) => <Icon className="fa fa-registered">{children}</Icon>;
export const LoginIcon = ({ children }) => <Icon className="fa fa-sign-in">{children}</Icon>;
export const RestoreIcon = ({ children }) => <Icon className="fa fa-refresh">{children}</Icon>;
export const SendIcon = ({ children }) => <Icon className="fa fa-send">{children}</Icon>;
export const CreditCardIcon = ({ children }) => <Icon className="fa fa-credit-card">{children}</Icon>;
export const GoogleIcon = ({ children }) => <Icon className="fa fa-google">{children}</Icon>;
export const FacebookIcon = ({ children }) => <Icon className="fa fa-facebook-official">{children}</Icon>;
export const DecrementIcon = ({ children }) => <Icon className="fa fa-minus-circle">{children}</Icon>;
export const IncrementIcon = ({ children }) => <Icon className="fa fa-plus-circle">{children}</Icon>;
export const ErrorIcon = ({ children }) => <Icon className="fa fa-exclamation-circle">{children}</Icon>;
export const SuccessIcon = ({ children }) => <Icon className="fa fa-check-circle">{children}</Icon>;
export const InviteIcon = ({ children }) => <Icon className="fa fa-hand-peace-o">{children}</Icon>;
export const USDIcon = ({ children }) => <Icon className="fa fa-usd">{children}</Icon>;
export const RefreshIcon = ({ children }) => <Icon className='fa fa-refresh'>{children}</Icon>;
export const SearchIcon = ({ children }) => <Icon className='fa fa-search'>{children}</Icon>;
export const LogOutIcon = ({ children }) => <Icon className="fa fa-sign-out">{children}</Icon>;
export const NavigationIcon = ({ children }) => <Icon className="fa fa-compass fa-2x">{children}</Icon>;
export const StripeIcon = ({ children }) => <Icon className="fa fa-cc-stripe">{children}</Icon>;
export const InstallIcon = ({ children }) => <Icon className="fa fa-play-circle">{children}</Icon>;
export const CancelIcon = ({ children }) => <Icon className="fa fa-remove">{children}</Icon>;
export const EditIcon = ({ children }) => <Icon className="fa fa-edit">{children}</Icon>
export const PendingIcon = ({ children }) => <Icon className="fa fa-pause-circle">{children}</Icon>;

Icon.propTypes = {
  className: PropTypes.string.isRequired,
};

export function WebStackIcon({ webStack }) {
  switch (webStack) {
    case "WordPress":
      return (<Icon className="fa fa-wordpress"/>);
    default:
      return (<Icon className="fa fa-code"/>)
  }
}
