import React from "react";
import {EdgeDropContext} from "components/Flow/EdgeDrop";
import DashboardLayout from "components/Dashboard/DashboardLayout";
import DashboardList from "components/Dashboard/DashboardList";
import DashboardMindmapProperties from "components/Dashboard/DashboardMindmapProperties";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
`;

type Props = {};

export default function edgedrop({}: Props) {
  // Container with 3 Sections
  // List, Canvas and Table
  return (
    <DashboardLayout>
      <DashboardList />
      <Content>
        <EdgeDropContext />
        <DashboardMindmapProperties />
      </Content>
    </DashboardLayout>
  );
}