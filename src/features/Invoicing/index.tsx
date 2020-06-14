import React from 'react';

import { useDocumentTitle } from 'hooks';
import { Dropzone, Page } from 'components';

const Invoicing = () => {
  const title = 'Invoicing';
  useDocumentTitle(title);

  return (
    <Page title={title}>
      <Dropzone />
    </Page>
  );
};

export default Invoicing;
