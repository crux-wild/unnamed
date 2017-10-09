import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import GluttonousSnake from 'components/game/GluttonousSnake';

import canvasActionCreators from 'actions/common/canvas';

import gameActionCreators from 'actions/game/gluttonousSnake/game';

function mapStateToProps(state, ownProps = {}) {
  const {
    routers: {
      game: {
        gluttonousSnake: {
          game,
        },
      },
    },
  } = state.toJS();
  const {
    score,
    status,
  } = game.toJS();
  return {
    game: {
      score,
      status,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...gameActionCreators,
        ...canvasActionCreators,
      },
      dispatch,
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GluttonousSnake);