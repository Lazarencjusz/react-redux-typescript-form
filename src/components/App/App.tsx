import { Card, CardContent, Divider } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { FormStepper } from '../../features/FormStepper/FormStepper';
import { FormView } from '../../model/enum/FormView';
import { ViewConfig } from '../../model/ViewConfig';
import { currentFormView } from '../../store/form/form.selectors';
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
  const selectedView: FormView = useSelector(currentFormView);

  return (
    <Row justify="center">
      <Card className="app-form-wrapper">
        <FormStepper />
        <Divider />
        <CardContent>
          <ViewSwitcher selectedView={selectedView} viewsConfig={viewsConfig} />
        </CardContent>
      </Card>
    </Row>
  );
}
