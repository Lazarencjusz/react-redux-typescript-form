import React, { useMemo } from 'react';
import { InputProps } from '../../model/form/InputProps';
import { UpdateFormFieldPayload } from '../../model/form/UpdateFormFieldPayload';
import { Column } from '../../utils/components/Column/Column';
import { generateFormInputs } from '../../utils/generateFormInputs';

interface Props {
  config: InputProps[];
}

interface Events {
  onChange: (data: UpdateFormFieldPayload) => void;
}

export function FormFactory(props: Props & Events): JSX.Element {
  const createInputs = useMemo(() => generateFormInputs(props.config, props.onChange), [props.config]);
  return <Column>{createInputs}</Column>;
}
