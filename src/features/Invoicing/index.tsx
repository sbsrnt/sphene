import React from 'react';

import { useDocumentTitle } from 'hooks';
import { Page } from 'components';

const Invoicing = () => {
  const title = 'Invoicing';
  useDocumentTitle(title);
  return <Page title={title}>invoicing yo</Page>;
};

export default Invoicing;
