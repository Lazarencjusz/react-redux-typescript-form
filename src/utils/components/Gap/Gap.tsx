import React from 'react';

export interface Props {
  width?: string;
  height?: string;
  className?: string;
  strict?: boolean;
}

export class Gap extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <div
        className={this.props.className}
        style={{
          width: this.props.width ?? '1px',
          minWidth: this.props.strict ? this.props.width : undefined,
          maxWidth: this.props.strict ? this.props.width : undefined,
          height: this.props.height ?? '1px',
          minHeight: this.props.strict ? this.props.height : undefined,
          maxHeight: this.props.strict ? this.props.height : undefined,
        }}
      />
    );
  }
}
