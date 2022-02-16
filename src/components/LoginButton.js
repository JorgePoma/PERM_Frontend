import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <CustomProfile src='https://img.icons8.com/material-outlined/24/000000/user--v1.png' onClick={() => loginWithRedirect()} />
};

export default LoginButton;

const CustomProfile = styled.img`
    cursor: pointer;
    padding-left: 2vh;
    padding-right: 2vh; 
`