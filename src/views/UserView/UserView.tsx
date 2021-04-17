import { TextField } from '@material-ui/core';
import React from 'react';
import { Column } from '../../utils/components/Column/Column';

export function UserView(): JSX.Element {
  return (
    <Column>
      <TextField required id="form-name" label="name" />
    </Column>
  );
}
