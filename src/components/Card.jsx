import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 150px;
  width: 33%;
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  margin-top: 15px;
 `

export default function Card({img}) {
  return <Div style={{backgroundImage:  `url(${img})`}}/>
}
