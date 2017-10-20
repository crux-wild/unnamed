import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import SnakeEatEggs from 'client/components/game/GluttonousSnake/SnakeEatEggs';

import snakeActionCreators from 'client/actions/game/gluttonousSnake/snakeEatEggs/snake';

import eggsActionCreators from 'client/actions/game/gluttonousSnake/snakeEatEggs/eggs';

import boundaryActionCreators from 'client/actions/game/gluttonousSnake/snakeEatEggs/boundary';

import snakeEatEggsActionCreators from 'client/actions/game/gluttonousSnake/snakeEatEggs/snakeEatEggs.js';

function mapStateToProps(state) {
  const boundary = state.get('boundary');
  const eggs = state.get('eggs');
  const snake = state.get('snake');
  const background = state.get('background');
  return {
    immutable: {
      boundary,
      eggs,
      snake,
      background,
    },
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  let actions = bindActionCreators({
    ...snakeActionCreators,
    ...eggsActionCreators,
    ...boundaryActionCreators,
    ...snakeEatEggsActionCreators,
  }, dispatch);
  actions = Object.assign({}, ownProps.actions, actions);
  return {
    actions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SnakeEatEggs);
