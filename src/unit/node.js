import Unit from './unit';

class Node extends Unit {
  constructor(entity, properties, uniqueID) {
    super(entity, properties, uniqueID);
    this.edges = [];
    this.inputEdges = [];
    this.outputEdges = [];
  }

  unlink() {
    let edges = this.edges;

    for(let i = 0; i < edges.length; i++) {
      edges[i].unlink();
    }
    return true;
  }

  toJSON() {
    return super.toJSON();
  }
}

export default Node;
