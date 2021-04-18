import { chain } from 'lodash';
import React, { useMemo } from 'react';
import { TextInput } from '../../features/formInputs/TextInput/TextInput';
import { InputProps } from '../../model/form/InputProps';
import { InputType } from '../../model/form/InputType';
import { UpdateFormFieldPayload } from '../../model/form/UpdateFormFieldPayload';
import { Column } from '../../utils/components/Column/Column';
import { CheckboxInput } from '../formInputs/CheckboxInput/CheckboxInput';

interface Props {
  config: InputProps[];
}

interface Events {
  onChange: (data: UpdateFormFieldPayload) => void;
}

const generateInputs = (config: InputProps[], onChange: (data: UpdateFormFieldPayload) => void): JSX.Element[] =>
  chain(config)
    .map((inputConfig: InputProps) => {
      switch (inputConfig.type) {
        case InputType.checkbox:
          return <CheckboxInput {...inputConfig} key={inputConfig.field} onChange={onChange} />;
        case InputType.password:
        case InputType.email:
        default:
          return <TextInput {...inputConfig} key={inputConfig.field} onChange={onChange} />;
      }
    })
    .value();

export function FormFactory(props: Props & Events): JSX.Element {
  const createInputs = useMemo(() => generateInputs(props.config, props.onChange), [props.config]);
  return <Column>{createInputs}</Column>;
}
