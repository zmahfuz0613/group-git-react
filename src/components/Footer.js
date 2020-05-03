import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #f2f2f2;
`;

const Credit = styled.div`

`;

const Span = styled.span`
  margin: 0 3px;
  font-family: "Yesteryear", cursive;
  font-size: 1.9em;
  color: hsl(170, 40%, 60%);
  text-shadow: 0.5px 0.5px 0.2px black;
`;

export default function Footer() {
  return (
    <Div>
      <Credit></Credit>
    </Div>
  )
}
