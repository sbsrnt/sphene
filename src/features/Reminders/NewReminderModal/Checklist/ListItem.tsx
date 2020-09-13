import React from 'react';
import styled from 'styled-components';

import { Body, Column, FormField, Input, Row } from 'components';

type ListItem = {
  i: number;
  register: any;
  disabled: boolean;
  errors: any;
};

const StyledRow = styled(Row)`
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 0.5em;
  }

  > div {
    width: 100%;
  }
`;

const ListItem = ({ i, register, disabled, errors }: ListItem) => {
  const itemId = `item_${i - 1}`;
  return (
    <StyledRow>
      <Column>
        <StyledWrapper>
          <Body>{i}.</Body>
          <FormField
            component={Input}
            name={itemId}
            errors={errors}
            formRef={register}
            disabled={disabled}
            placeholder="Add check item"
            dataId={itemId}
            hasLabel={false}
          />
        </StyledWrapper>
      </Column>
    </StyledRow>
  );
};

export default ListItem;
