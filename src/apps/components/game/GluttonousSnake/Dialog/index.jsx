import PropTypes from 'prop-types';

import React from 'react';

import Status from '../Status';

import EndConfirm from './EndConfirm';

import PauseAlert from './PauseAlert';

import GradeAlert from './GradeAlert';

/**
 * @public
 * @class
 */
class Dialog extends React.PureComponent {
  /**
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * @method
   */
  render() {
    return (
      <div>
        <EndConfirm {...this.props} />
        <PauseAlert {...this.props} />
        <GradeAlert {...this.props} />
      </div>
    );
  }
}

// Specifies the verification rule for props:
Dialog.propTypes = {
  status: PropTypes.number,
};

// Specifies the default values for props:
Dialog.defaultProps = {
  status: Status.PENDING,
};

export default Dialog;
