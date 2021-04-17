import { Checkbox, FormControlLabel } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { InputProps } from '../../../model/form/InputProps';
import { UpdateFormFieldPayload } from '../../../model/form/UpdateFormFieldPayload';
import { getFieldValue } from '../../../store/form/form.selectors';

interface Events {
  onChange: (data: UpdateFormFieldPayload) => void;
}

export function CheckboxInputComponent(props: InputProps & Events): JSX.Element {
  const defaultValue: string | boolean = useSelector(getFieldValue(props.field));

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    props.onChange({ field: props.field, value: event?.target?.checked });
  }, []);

  return (
    <FormControlLabel
      control={<Checkbox defaultChecked={!!defaultValue} onChange={handleChange} name={props.field} color="primary" />}
      label={props.label}
    />
  );
}

export const CheckboxInput = React.memo(CheckboxInputComponent);
