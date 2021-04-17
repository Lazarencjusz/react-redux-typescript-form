import { Step, StepLabel, Stepper } from '@material-ui/core';
import { map, values } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { FormView } from '../../model/enum/FormView';
import { getCurrentFormViewIndex } from '../../store/form/form.selectors';
import './FormStepper.css';

const steps = map(values(FormView), (view: FormView) => (
  <Step key={view}>
    <StepLabel>{view}</StepLabel>
  </Step>
));

export function FormStepper(): JSX.Element {
  const activeStep: number = useSelector(getCurrentFormViewIndex);

  return (
    <Stepper className="form-stepper" alternativeLabel activeStep={activeStep}>
      {steps}
    </Stepper>
  );
}
