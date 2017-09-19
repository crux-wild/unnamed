import React from 'react';

import Canvas from 'components/common/Canvas';

import Rtl from 'components/game/Rtl';

import Snake from 'components/game/Snake';

/**
 * @public
 * @class
 */
class GluttonousSnake extends Canvas {
  /**
   * @method
   */
  getInitData() {
    const {
      canvas: {
        width,
        height,
      },
    } = this.props;
    const outer = {
      width,
      height,
    };
    const context = this.getContext();
    const snake = new Snake({ context, outer });
    return {
      context,
      snake,
    };
  }

  /**
   * @method
   */
  init() {
    this.data = this.getInitData();

    this.bindKeyboardEvent();
  }

  /**
   * @method
   */
  bindKeyboardEvent() {
    document.addEventListener('keydown', (event) => {
      const {
        head: {
          rtl: prevRtl,
        },
      } = this.data.snake;
      let rtl = prevRtl;
      switch (event.code) {
        case 'KeyS':
          rtl = Rtl.Down;
          break;
        case 'KeyA':
          rtl = Rtl.Left;
          break;
        case 'KeyW':
          rtl = Rtl.Up;
          break;
        case 'KeyD':
          rtl = Rtl.Right;
          break;
      }

      if (rtl != Rtl.None) {
        const {
          snake,
        } = this.data;
        snake.setHeadRtl(rtl);
      }
    });
  }

  /**
   * @method
   */
  redraw() {
    const {
      snake,
    } = this.data;
    snake.drawHead();
  }

  /**
   * @method
   */
  getContext() {
    const {
      canvas: {
        id,
      },
    } = this.state;

    const canvasEl = document.querySelector(`#${id}`);
    const context = canvasEl.getContext('2d');
    return context;
  }

  /**
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
   * @method
   */
  componentDidUpdate() {
    if (this.context != null) {
      this.init();
    }

    this.redraw();
  }
}

export default GluttonousSnake;
