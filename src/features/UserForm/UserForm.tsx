import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormFactory } from '../../features/FormFactory/FormFactory';
import { UpdateFormFieldPayload } from '../../model/form/UpdateFormFieldPayload';
import { goToPrivacyView, setFormField } from '../../store/form/form.actions';
import { getIsUserFormValid } from '../../store/form/form.selectors';
import { Row } from '../../utils/components/Row/Row';
import { userFormConfig } from '../../utils/formViews/userFormConfig';

export function UserForm(): JSX.Element {
  const dispatch = useDispatch();
  const onChange = (data: UpdateFormFieldPayload) => dispatch(setFormField(data));

  const isFormValid: boolean = useSelector(getIsUserFormValid);

  const handleClick = () => dispatch(goToPrivacyView());

  return (
    <>
      <FormFactory config={userFormConfig} onChange={onChange} />
      <Row justify="flex-end" grow>
        <Button disabled={!isFormValid} onClick={handleClick} color="primary" variant="contained">
          Next
        </Button>
      </Row>
    </>
  );
}
