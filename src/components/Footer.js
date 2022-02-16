import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
      <Foot>
          <h5>UNL - Cloud Computing</h5>
          <h6>Jorge Poma</h6>
          <h6>2021</h6>
      </Foot>
  );
}

export default Footer;

const Foot = styled.div`
    //background-color: #DA5757;
    background-color: #393c41;
    color: white;
    width: 100%;
    height: 100px;
    padding-top: 4vh;
    padding-bottom: 2vh;
    h5, h6 {
        color: white;
    }
`