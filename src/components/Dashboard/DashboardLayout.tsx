import React, {Children, PropsWithChildren} from "react";
import styled from "styled-components";
import {EdgeDropContext} from "components/Flow/EdgeDrop";
import DashboardList from "./DashboardList";
import DashboardMindmapProperties from "./DashboardMindmapProperties";

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 50px;
`;

type Props = {};

export default function DashboardLayout({children}: PropsWithChildren) {
  return <Container id="dashboard_layout">{children}</Container>;
}
