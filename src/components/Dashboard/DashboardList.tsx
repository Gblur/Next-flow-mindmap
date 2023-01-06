import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: calc(100vh - 200px);
  overflow: scroll;
`;

type Props = {};

export default function DashboardList({}: Props) {
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);

  async function getApiRoute() {
    const res = await fetch("http://localhost:3000/api");
    if (!res.ok) {
      throw new Error(`An error has occured ${res.status}`);
    }
    const data = await res.json();
    setName(data.name);
  }

  useEffect(() => {
    if (!name) {
      getApiRoute();
    }
  });

  return <Container>{name}</Container>;
}
