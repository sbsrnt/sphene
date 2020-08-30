import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export type AnimatedItemProps = {
  animation?: 'fromLeft' | 'fromTop';
  children: ReactNode;
};

const StyledDiv = styled(motion.div)``;

const animations = {
  fromTop: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -10 },
  },
  fromLeft: {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  },
};

const AnimatedItem = ({ animation = 'fromLeft', children, ...props }: AnimatedItemProps) => (
  <StyledDiv variants={animations[animation]} {...props}>
    {children}
  </StyledDiv>
);

export default AnimatedItem;
