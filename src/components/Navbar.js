import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background-color: #f2f2f2;
`;

const Nav = styled.nav`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
`;
const H1 = styled.h1`
  margin: 0 4px;
  font-family: "Raleway";
  font-size: 2.8em;
  color: hsl(170, 40%, 60%);
  text-shadow: 0.5px 0.5px 0.2px black;
`;

const H3 = styled.h3`
  margin: 3px;
  font-family: "Raleway";
`;

const Links = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Anchor = styled.a`
  font-family: "Raleway";
  text-decoration: none;
  margin-left: 8px;
  font-weight: bold;
  color: hsl(195, 53%, 43%);
  text-shadow: 0.5px 0.5px 0.2px rgba(0, 0, 0, 0.4);
  font-size: 1.2em;
  padding: 0 5px;
`;

export default function Navbar() {
  return (
    <Header>
      <Nav>
        <div>
          <H1>Shady Acres</H1>
          <H3>A nice place to live!</H3>
          <Anchor href="#">Photos</Anchor>
        </div>
        <Links>
          <Anchor href="#">Contact Us</Anchor>
          <Anchor href="#">Buy Now!</Anchor>
        </Links>
      </Nav>
    </Header>
  );
}
