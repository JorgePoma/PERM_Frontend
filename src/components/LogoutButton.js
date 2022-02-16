import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout } = useAuth0();

  

  return (
    <But onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </But>
  )
}

export default LogoutButton;

const But = styled.button`
    text-align: center;
    background-color: #DA5757;
    color: white;
    padding: 15px 0;
    border: 1px solid rgba(0,0,0, .2);
    font-weight: 600;
    cursor:pointer;
`