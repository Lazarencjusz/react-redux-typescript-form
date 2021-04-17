import React from 'react';

export interface Props {
  when: boolean;
}

export class Display extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <div style={{ flex: '1 0 auto', visibility: this.props.when ? 'visible' : 'hidden' }}>{this.props.children} </div>
    );
  }
}
