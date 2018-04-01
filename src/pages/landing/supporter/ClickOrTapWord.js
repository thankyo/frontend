import React from "react";

const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
const ClickOrTapWord = () => supportsTouch ? <span>tap</span> : <span>click</span>;

export default ClickOrTapWord;