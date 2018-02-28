import React from "react";
import { ResourceIcon } from "components/Icon";

const Resource = ({ resource: { uri }}) => (<ResourceIcon>{uri}</ResourceIcon>);

export default Resource;