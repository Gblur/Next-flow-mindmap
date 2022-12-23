import React, {Children, PropsWithChildren} from "react";
import styled from "styled-components";
import {EdgeDropContext} from "components/Flow/EdgeDrop";
import DashboardList from "./DashboardList";
import DashboardMindmapProperties from "./DashboardMindmapProperties";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 50px;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
`;

type Props = {};

export default function DashboardLayout({}: PropsWithChildren) {
  return (
    <Container>
      <DashboardList />
      <Content>
        <EdgeDropContext />
        <DashboardMindmapProperties />
      </Content>
    </Container>
  );
}
