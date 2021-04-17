import { Button } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormFactory } from '../../features/FormFactory/FormFactory';
import { UpdateFormFieldPayload } from '../../model/form/UpdateFormFieldPayload';
import { goToPrivacyView, setFormField } from '../../store/form/form.actions';
import { getIsUserFormValid } from '../../store/form/form.selectors';
import { Column } from '../../utils/components/Column/Column';
import { Row } from '../../utils/components/Row/Row';
import { userFormConfig } from '../../utils/formViews/userFormConfig';

export function UserView(): JSX.Element {
  const dispatch = useDispatch();
  const onChange = useCallback((data: UpdateFormFieldPayload) => dispatch(setFormField(data)), []);

  const isFormValid: boolean = useSelector(getIsUserFormValid);

  const handleClick = useCallback(() => {
    dispatch(goToPrivacyView());
  }, []);

  return (
    <Column>
      <FormFactory config={userFormConfig} onChange={onChange} />
      <Row justify="flex-end" grow>
        <Button disabled={!isFormValid} onClick={handleClick} color="primary" variant="contained">
          Next
        </Button>
      </Row>
    </Column>
  );
}
