import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IceTest2IceTest01 extends Component {
  static displayName = 'IceTest2IceTest01';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        ice-test2-ice-test01
      </div>
    );
  }
}

const styles = {

}
