import React from "react";
import Logo from "components/logo.svg";

function PostActionWrap({ children }){
  return (
    <nav className="level is-mobile">
      <div className="level-left">
        <div className="level-item">
          {children}
        </div>
      </div>
    </nav>
  )
}

export default function LoveItButton({ isLoved, onLove }) {
  if (isLoved) {
    return (
      <PostActionWrap>
        <a className="loveit-fab" disabled>
          <Logo width={40} height={40} className="fab-is-loved"/>
        </a>
      </PostActionWrap>
    );
  }
  return (
    <PostActionWrap>
      <a className="loveit-fab" onClick={onLove}>
        <Logo width={40} height={40}/>
      </a>
    </PostActionWrap>
  )
}