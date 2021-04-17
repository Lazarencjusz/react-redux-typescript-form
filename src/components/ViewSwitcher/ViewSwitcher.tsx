import React from 'react';
import { ViewConfig } from '../../model/ViewConfig';

interface Props {
  selectedView: string;
  viewsConfig: ViewConfig;
}

function ViewSwitcherComponent(props: Props): JSX.Element {
  return props.viewsConfig?.[props.selectedView];
}

export const ViewSwitcher = React.memo(ViewSwitcherComponent);
