import React from 'react';
import { UserForm } from '../../features/UserForm/UserForm';
import { Column } from '../../utils/components/Column/Column';

export function UserView(): JSX.Element {
  return (
    <Column>
      <UserForm />
    </Column>
  );
}
