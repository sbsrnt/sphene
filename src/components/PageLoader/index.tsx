import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { Loader } from 'components';

const Content = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  color: white;
`;

const variants = {
  visible: {
    opacity: 1,
    background: 'black',
  },
  hidden: {
    opacity: 0,
  },
};

const PageLoader: FC<{ visible: boolean }> = ({ visible = true }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {visible && (
        <Content
          variants={variants}
          initial="visible"
          exit="hidden"
          animate="visible"
          className="d-flex align-items-center justify-content-center"
        >
          <Loader />
        </Content>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
