/* eslint-disable react/display-name */
import React, {useCallback, useRef} from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Connection,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";

import styled from "styled-components";

// Create a styled component for the node
const Wrapper = styled.div`
  width: 100%;
  height: 60%;
`;

const initialNodes = [
  {
    id: "0",
    type: "input",
    data: {label: "Node"},
    position: {x: 0, y: 50},
  },
];

let id = 1;
const getId = () => `${id++}`;

const fitViewOptions = {
  padding: 3,
};

const AddNodeOnEdgeDrop = () => {
  const reactFlowWrapper = useRef<HTMLElement>(null);
  const connectingNodeId = useRef<string>("");
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const {project} = useReactFlow();
  const onConnect = useCallback(
    (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onConnectStart = useCallback((_: any, {nodeId}: any) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event: any) => {
      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane && reactFlowWrapper.current) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const {top, left} = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
        const newNode = {
          id,
          // we are removing the half of the node width (75) to center the new node
          position: project({
            x: event.clientX - left - 75,
            y: event.clientY - top,
          }),
          data: {label: `Node ${id}`},
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds: Array<Edge>) =>
          eds.concat({id, source: connectingNodeId.current, target: id})
        );
      }
    },
    [project, setEdges, setNodes]
  );

  return (
    <Wrapper className="wrapper" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        fitView
        fitViewOptions={fitViewOptions}
      />
    </Wrapper>
  );
};

export const EdgeDropContext = () => (
  <ReactFlowProvider>
    <AddNodeOnEdgeDrop />
  </ReactFlowProvider>
);
