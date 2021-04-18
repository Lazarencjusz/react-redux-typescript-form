import React from 'react';
import { PrivacyForm } from '../../features/PrivacyForm/PrivacyForm';
import { Column } from '../../utils/components/Column/Column';

export function PrivacyView(): JSX.Element {
  return (
    <Column>
      <PrivacyForm />
    </Column>
  );
}
