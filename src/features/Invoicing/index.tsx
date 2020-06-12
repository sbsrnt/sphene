import React from 'react';

import { useDocumentTitle } from 'hooks';
import { Page } from 'components';

const Invoicing = () => {
  useDocumentTitle('Invoicing');
  return <Page>invoicing yo</Page>;
};

export default Invoicing;
