import { InputLabelProps, TextField } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { InputProps } from '../../../model/form/InputProps';
import { UpdateFormFieldPayload } from '../../../model/form/UpdateFormFieldPayload';
import { getFieldError } from '../../../store/form/form.selectors';

const shrinkProperty: Partial<InputLabelProps> = {
  shrink: true,
};

interface Events {
  onChange: (data: UpdateFormFieldPayload) => void;
}

export function TextInputComponent(props: InputProps & Events): JSX.Element {
  const fieldError: string | null | undefined = useSelector(getFieldError(props.field));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    props.onChange({ field: props.field, value: event?.target?.value });

  return (
    <TextField
      onChange={handleChange}
      variant="outlined"
      required={props.required}
      id={`form-${props.field}`}
      label={props.label}
      type={props.type}
      InputLabelProps={shrinkProperty}
      margin="normal"
      helperText={fieldError}
      error={!!fieldError}
    />
  );
}

export const TextInput = React.memo(TextInputComponent);
