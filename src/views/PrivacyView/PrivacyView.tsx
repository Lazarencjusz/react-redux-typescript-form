import { Button } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FormFactory } from '../../features/FormFactory/FormFactory';
import { FormView } from '../../model/enum/FormView';
import { UpdateFormFieldPayload } from '../../model/form/UpdateFormFieldPayload';
import { setFormField, setFormView } from '../../store/form/form.actions';
import { Column } from '../../utils/components/Column/Column';
import { Row } from '../../utils/components/Row/Row';
import { privacyFormConfig } from '../../utils/formViews/privacyFormConfig';

export function PrivacyView(): JSX.Element {
  const dispatch = useDispatch();

  const onChange = useCallback((data: UpdateFormFieldPayload) => dispatch(setFormField(data)), []);

  const handleClick = useCallback(() => {
    dispatch(setFormView(FormView.done));
  }, []);

  return (
    <Column>
      <FormFactory config={privacyFormConfig} onChange={onChange} />
      <Row justify="flex-end" grow>
        <Button onClick={handleClick} color="primary" variant="contained">
          Submit
        </Button>
      </Row>
    </Column>
  );
}
