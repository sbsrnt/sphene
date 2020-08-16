import React from 'react';
import styled from 'styled-components';

import { useAuth } from 'hooks';

const MainTooltip = styled.div`
  position: relative;
  top: -30px;
  height: 20px;
  left: calc(100% - 41.66px * 4);

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const MenuBarBtn = styled.button`
  -webkit-app-region: no-drag;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  height: 30px;
  color: white;
  padding: 0 1em;

  &:hover {
    background: rgba(221, 221, 221, 0.2);
  }

  i {
    color: white;
    font-size: 15px !important;
    position: relative;
    display: inline-block;

    &.login {
      &:after {
        content: 'login';
        position: relative;
        left: -2px;
      }
    }
  }
`;

const TooltipText = styled.span`
  visibility: hidden;
  background-color: #383838;
  color: #fff;
  border: 1px solid #fff;
  text-align: center;
  padding: 5px 10px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  top: calc(100% + 5px);
  left: 0;
  transition: opacity 0s linear 1s;
  font-size: 12px;
  box-shadow: 0 0 5px black;

  /* Fade in tooltip */
  opacity: 0;
`;

const Logout = () => {
  // const { logout } = useAuth();
  return (
    <MainTooltip>
      <MenuBarBtn onClick={() => ({})}>
        <i className="material-icons login" />
        <TooltipText className="tooltiptext">Logout</TooltipText>
      </MenuBarBtn>
    </MainTooltip>
  );
};

export default Logout;
