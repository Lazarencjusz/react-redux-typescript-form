import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { UpdateFormFieldPayload } from '../../model/form/UpdateFormFieldPayload';
import { goToDoneView, setFormField } from '../../store/form/form.actions';
import { Row } from '../../utils/components/Row/Row';
import { privacyFormConfig } from '../../utils/formViews/privacyFormConfig';
import { FormFactory } from '../FormFactory/FormFactory';

export function PrivacyForm(): JSX.Element {
  const dispatch = useDispatch();

  const onChange = (data: UpdateFormFieldPayload) => dispatch(setFormField(data));

  const handleClick = () => dispatch(goToDoneView());

  return (
    <>
      <FormFactory config={privacyFormConfig} onChange={onChange} />
      <Row justify="flex-end" grow>
        <Button onClick={handleClick} color="primary" variant="contained">
          Submit
        </Button>
      </Row>
    </>
  );
}
