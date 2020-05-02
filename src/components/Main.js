import React from "react";
import Bg from "../images/land.jpg";
import styled from "styled-components";

const Div = styled.div`
  background-image: url(${Bg});
  height: 100%;
  display: flex;
`;

export default function Main() {
  return (
    <Div>
      <div>Reserver your land plot now!</div>
      <div>Construction starts early 2021</div>
      <div>Activities</div>
    </Div>
  );
}
