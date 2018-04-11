import React, { Component } from "react";
import TumblrInstruction from "./Tumblr";
import WordPress from "./Wordpress";
import Manual from "./Manual";
import { WebStackIcon } from "components/Icon";

const WebStackElement = ({ webStack, onSelect,  active }) => (
  <p className="control">
    <a className={`button ${active ? "is-primary" : ""}  is-small`} onClick={onSelect}>
      <WebStackIcon webStack={webStack}>{webStack}</WebStackIcon>
    </a>
  </p>
);

const WebStackSelector = ({ webStack, onWebStackChange }) => (
  <div className="field has-addons is-small">
    <WebStackElement webStack="Tumblr" onSelect={() => onWebStackChange("Tumblr")} active={webStack === "Tumblr"}/>
    <WebStackElement webStack="WordPress" onSelect={() => onWebStackChange("WordPress")} active={webStack === "WordPress"}/>
    <WebStackElement webStack="Other" onSelect={() => onWebStackChange(undefined)} active={webStack === undefined}/>
  </div>
);

class InstructionPage extends Component{
  constructor(props) {
    super(props);

    this.state = { webStack: props.webStack };
  }

  handleWebStackChange = (webStack) => {
    this.setState({ webStack });
  };

  renderInstructions = () => {
    let { url } = this.props;
    let { webStack } = this.state;

    switch (webStack) {
      case "WordPress":
        return <WordPress url={url}/>;
      case "Tumblr":
        return <TumblrInstruction/>;
      default:
        return <Manual/>
    }
  };

  render() {
    let { webStack } = this.state;

    return (
      <div>
        <WebStackSelector webStack={webStack} onWebStackChange={this.handleWebStackChange}/>
        <div>
        {this.renderInstructions()}
        </div>
      </div>
    );
  }
}

export default InstructionPage;