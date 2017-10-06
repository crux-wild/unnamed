import deepEqual from 'deep-equal';

const Sym = Object.freeze({
  BOUNDARY: Symbol('boundary'),
});

/**
 * @class
 */
class Background {
  /**
   * @constructor
   */
  constructor(options = { color: '#ccc' }) {
    const defaultOptitons = Background.getDefaultOptions();
    const instances = Background.getInstances();
    Object.assign(this, defaultOptitons, options, instances);
  }

  /**
   * @method
   */
  static getDefaultOptions() {
    return {
      size: 10,
      color: '#ccc',
      context: null,
   };
  }

  /**
   * @static
   * @method
   */
  static getInstances() {
    return {
      boundary: {
        width: 0,
        heigth: 0,
      },
    };
  }

  /**
   * @method
   */
  mapStateToProps(state) {
    const {
      boundary,
    } = state;
    this.boundary = boundary;
  }

  /**
   * @method
   */
  set boundary(boundary) {
    if (!deepEqual(this.boundary, boundary)) {
      this.clear();
      this[Sym.BOUNDARY] = boundary;
      this.draw();
    }
  }

  /**
   * @method
   */
  get boundary() {
    return this[Sym.BOUNDARY];
  }

  /**
   * @method
   */
  draw() {
    const {
      color,
      boundary: {
        width,
        height,
      },
    } = this;
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, width, height);
  }

  /**
   * @method
   */
  clear() {
    if (typeof this.boundary === 'object') {
      const {
        boundary: {
          width,
          height,
        },
      } = this;
      this.context.clearRect(0, 0, width, height);
    }
  }
}

export default Background;
