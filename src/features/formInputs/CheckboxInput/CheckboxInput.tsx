import { Checkbox, FormControlLabel } from '@material-ui/core';
import React, { ChangeEvent, useMemo } from 'react';
import { InputProps } from '../../../model/form/InputProps';
import { UpdateFormFieldPayload } from '../../../model/form/UpdateFormFieldPayload';

interface Events {
  onChange: (data: UpdateFormFieldPayload) => void;
}

export function CheckboxInputComponent(props: InputProps & Events): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    props.onChange({ field: props.field, value: event?.target?.checked });

  const checkbox = useMemo(
    () => <Checkbox defaultChecked={!!props.defaultValue} onChange={handleChange} name={props.field} color="primary" />,
    [],
  );

  return <FormControlLabel control={checkbox} label={props.label} />;
}

export const CheckboxInput = React.memo(CheckboxInputComponent);
