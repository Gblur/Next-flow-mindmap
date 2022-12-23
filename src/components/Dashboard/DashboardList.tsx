import {Table} from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: calc(100vh - 200px);
  overflow: scroll;
`;

type Props = {};

export default function DashboardList({}: Props) {
  return (
    <Container>
      <Table></Table>
    </Container>
  );
}
