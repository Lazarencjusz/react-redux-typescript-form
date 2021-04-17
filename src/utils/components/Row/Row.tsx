import React from 'react';

export interface Props {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  className?: string;
  grow?: boolean;
  shrink?: boolean;
  relative?: boolean;
  auto?: boolean;
}

export class Row extends React.PureComponent<Props> {
  static defaultProps: Props = {
    auto: true,
  };
  get grow(): number {
    return this.props.grow ? 1 : 0;
  }
  get shrink(): number {
    return this.props.shrink ? 1 : 0;
  }

  get flex(): string {
    return this.props.grow || this.props.shrink ? `${this.grow} ${this.shrink} ${this.props.auto ? 'auto' : ''}` : null;
  }
  render(): JSX.Element {
    return (
      <div
        className={this.props.className}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: this.props.justify,
          alignItems: this.props.align,
          flex: this.flex,
          position: this.props.relative ? 'relative' : null,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
