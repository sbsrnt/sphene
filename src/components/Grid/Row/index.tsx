import React, { ReactNode } from 'react';
import cx from 'classnames';
import styled from 'styled-components';

type RowProps = {
  children?: ReactNode;
  className?: string;
};

const StyledRow = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Row = ({ className, children, ...props }: RowProps) => (
  <StyledRow className={cx('row', className)} {...props}>
    {children}
  </StyledRow>
);

export default Row;
