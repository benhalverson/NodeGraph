import Unit from './Unit';

class Edge extends Unit {
  constructor(entity, properties, uniqueID) {
    super(entity, properties, uniqueID);
    this.inputNode = null;
    this.outputNode = null;
    this.duplex = false;
  }

  _linkTo(node, direction) {
    if(direction <= 0) {
      node.inputEdges.push(this);
    }
    if(direction >= 0) {
      node.outputEdges.push(this);
    }
    node.edges.push(this);
    return true;
  }

  link(inputNode, outputNode, duplex) {
    this.unlink();

    this.inputNode = inputNode;
    this.outputNode = outputNode;
    this.duplex = !!duplex;

    if(duplex) {
      this._linkTo(inputNode, 0);
      this._linkTo(outputNode, 0);
      return this;
    }

    this._linkTo(inputNode, 1);
    this._linkTo(outputNode, -1);
    return this;
  }

  setDistance(v) {
    this.distance = Math.abs(parseFloat(v) || 0);
    return this;
  }

  setWeight(v) {
    this.distance = 1 / Math.abs(parseFloat(v) || 0);
    return this;
  }

  oppositeNode(node) {
    if(this.inputNode === node) {
      return this.outputNode;
    } else if(this.outputNode === node) {
      return this.inputNode;
    }
    return;
  }

  unlink() {
    // let pos;
    // let inode = this.inputNode;
    // let onode = this.outputNode;
  }

  toJSON() {
    return super.toJSON().concat(
      [this.inputNode.uniqueID, this.outputNode.uniqueID, (this.duplex || 0, this.distance)]);
  }
}

export default Edge;
