import { Typography } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import React from 'react';
import { Column } from '../../utils/components/Column/Column';
import { Row } from '../../utils/components/Row/Row';
import './DoneView.css';

export function DoneView(): JSX.Element {
  return (
    <Column className="done-view">
      <Row justify="center" className="icon-wrapper">
        <DoneIcon color="secondary" fontSize="inherit" />
      </Row>
      <Row>
        <Typography align="center" color="secondary">
          Please verify your email address, you should have received an email from us already!
        </Typography>
      </Row>
    </Column>
  );
}
