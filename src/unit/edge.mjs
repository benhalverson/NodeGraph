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
}

export default Edge;
