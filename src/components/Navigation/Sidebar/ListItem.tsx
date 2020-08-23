import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Li = styled(motion.li)`
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
  a {
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
  }
`;

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export type ListItem = {
  path: string;
  icon: string;
  label: string;
};

const ListItem = ({ path, icon, label }: ListItem) => {
  return (
    <Li variants={item}>
      <NavLink to={path} activeClassName="active">
        <i className="material-icons-outlined">{icon}</i>
        <span>{label}</span>
      </NavLink>
    </Li>
  );
};

export default ListItem;
