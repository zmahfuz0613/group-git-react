import React from "react";
import Bg from "../images/land.jpg";
import Card from "./Card";
import styled from "styled-components";
import House1 from '../images/home1.jpg';
import House2 from '../images/home2.jpg';
import House3 from '../images/home3.jpg'
import House4 from '../images/home4.jpg'

const MainDiv = styled.div`
  background-image: url(${Bg});
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = styled.div`
  margin-top: 60px;
  background-color: rgba(0,0,0,.2);
  height: 20%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Images = styled.div`
  margin: 20px;
  width: 80%;
  display: flex;
  vertical-align: auto;
  justify-content: center;
  min-height: 60vh;
  

`
// wop

const images = [House1, House2, House3, House4]

export default function Main({year}) {
  return (
    <MainDiv>
      <Hero>
        <h1>Reserver your land plot now!</h1>
        <div>Construction starts early {year}</div>
      </Hero>
        <Images>
          {images.map(image => {
            return <Card img={image}/>
          })}
        </Images>

    </MainDiv>
  );
}
