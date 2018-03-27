class Path {
  constructor(array) {
    this._raw = array.slice();
  }

  start() {
    return this._raw[0];
  }

  end() {
    return this._raw[this._raw.length - 1];
  }

  length() {
    // return something....
  }
}

export default Path;
