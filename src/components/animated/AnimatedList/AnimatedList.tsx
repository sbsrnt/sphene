import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import AnimatedItem, { AnimatedItemProps } from './AnimatedItem';

type AnimatedListProps = {
  children: ReactNode;
  Item?: AnimatedItemProps;
};

const List = styled(motion.div)`
  height: 100%;
`;

const variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const AnimatedList = ({ children, ...props }: AnimatedListProps) => (
  <List variants={variants} initial="hidden" animate="visible" {...props}>
    {children}
  </List>
);

AnimatedList.Item = AnimatedItem;
export default AnimatedList;
