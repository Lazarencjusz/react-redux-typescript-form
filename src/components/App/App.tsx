import { Button, Card, CardActions, CardContent, Divider } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormStepper } from '../../features/FormStepper/FormStepper';
import { FormView } from '../../model/enum/FormView';
import { ViewConfig } from '../../model/ViewConfig';
import { goNextView } from '../../store/form/form.actions';
import { currentFormView, getIsActionButtonVisible, getNextButtonLabel } from '../../store/form/form.selectors';
import { Display } from '../../utils/components/Display/Display';
import { Row } from '../../utils/components/Row/Row';
import { DoneView } from '../../views/DoneView/DoneView';
import { PrivacyView } from '../../views/PrivacyView/PrivacyView';
import { UserView } from '../../views/UserView/UserView';
import { ViewSwitcher } from '../ViewSwitcher/ViewSwitcher';
import './App.css';

const viewsConfig: ViewConfig = {
  [FormView.user]: <UserView />,
  [FormView.privacy]: <PrivacyView />,
  [FormView.done]: <DoneView />,
};

export function App(): JSX.Element {
  const dispatch = useDispatch();
  const selectedView: FormView = useSelector(currentFormView);
  const nextButtonLabel: string = useSelector(getNextButtonLabel);
  const showActionButton: boolean = useSelector(getIsActionButtonVisible);

  const handleNextAction = useCallback(() => {
    dispatch(goNextView());
  }, []);

  return (
    <Row justify="center">
      <Card className="app-form-wrapper">
        <FormStepper />
        <Divider />
        <CardContent>
          <ViewSwitcher selectedView={selectedView} viewsConfig={viewsConfig} />
        </CardContent>
        <Display when={showActionButton}>
          <CardActions>
            <Row justify="flex-end" grow>
              <Button onClick={handleNextAction} color="primary" variant="contained">
                {nextButtonLabel}
              </Button>
            </Row>
          </CardActions>
        </Display>
      </Card>
    </Row>
  );
}
