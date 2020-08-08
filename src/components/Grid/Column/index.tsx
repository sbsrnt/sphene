import React, { ReactNode } from 'react';
import cx from 'classnames';

type SizeRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type RowProps = {
  children: ReactNode;
  className?: string | null;
  xs?: SizeRange;
  sm?: SizeRange;
  md?: SizeRange;
  lg?: SizeRange;
};

const Column = ({ className, children, xs, sm, md, lg, ...props }: RowProps) => {
  const columnClasses = cx({
    [`col-xs-${xs}`]: xs,
    [`col-sm-${sm}`]: sm,
    [`col-md-${md}`]: md,
    [`col-lg-${lg}`]: lg,
    ...(!xs && !sm && !md && !lg && { 'col-xs-12': true }),
    ...(className && { [className]: className }),
  });

  return (
    <div className={columnClasses} {...props}>
      {children}
    </div>
  );
};

export default Column;
