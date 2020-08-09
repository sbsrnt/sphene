import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { light } from 'theme';
import { ThemeProvider } from 'context-providers';
import { Loader } from 'components';

const Content = styled(motion.div)`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: calc(100% - 30px);
  color: ${(props) => props.theme.colors.white};
`;

const variants = {
  visible: {
    opacity: 1,
    background: light.colors.gray100,
  },
  hidden: {
    opacity: 0,
  },
};

const PageLoader: FC<{ visible: boolean }> = ({ visible = true }) => (
  <ThemeProvider>
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
  </ThemeProvider>
);

export default PageLoader;
