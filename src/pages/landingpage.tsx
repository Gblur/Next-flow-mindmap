import {type} from "os";
import React, {useState} from "react";
import styled from "styled-components";

// Create a styled component for the node
const Node = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  transition: transform 0.2s ease-in-out;

  // Add a hover effect
  &:hover {
    transform: scale(1.2);
  }
`;
type graphicalNodeProps = {
  id: string;
};

// Create a React component that renders the node
function GraphicalNode({id}: graphicalNodeProps) {
  // Use state to track whether the node is being hovered over
  const [, setIsHovered] = useState(false);

  return (
    <Node
      key={id}
      // Update the state when the node is hovered over
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

// Use the GraphicalNode component to render multiple nodes
function GraphicalNodeAnimation() {
  return (
    <div>
      <GraphicalNode id="1" />
      <GraphicalNode id="2" />
      <GraphicalNode id="3" />
    </div>
  );
}

export default GraphicalNodeAnimation;
