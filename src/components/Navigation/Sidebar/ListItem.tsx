import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;

  &:active,
  &:hover,
  &:visited,
  &:link {
    color: ${(props) => props.theme.colors.smokewhite};
    text-decoration: none;
  }

  &:hover {
    background: ${(props) => props.theme.colors.white}20;
    color: ${(props) => props.theme.colors.white};
  }

  &.active {
    &:active,
    &:hover,
    &:visited,
    &:link {
      background: ${(props) => props.theme.colors.white}20;
      color: ${(props) => props.theme.colors.white};
    }
  }

  i {
    padding-right: 10px;
  }
`;

export type ListItem = {
  path: string;
  icon: string;
  label: string;
};

const ListItem = ({ path, icon, label }: ListItem) => (
  <StyledNavLink to={path} activeClassName="active" data-cy={`nav-${label}`}>
    <i className="material-icons-outlined">{icon}</i>
    <span>{label}</span>
  </StyledNavLink>
);

export default ListItem;
