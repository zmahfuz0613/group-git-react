import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styled from "styled-components";

const Page = styled.div`
  margin: 0;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [year, setYear]= useState('2017')


  return (
    <Page>
      <Navbar />
      <Main year={year}/>
      <Footer />
    </Page>
  );
}

export default App;
