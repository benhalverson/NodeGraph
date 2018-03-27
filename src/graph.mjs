import fs from 'fs';
import zlib from 'zlib';

import Node from './src/node';
import Edge from './src/edge';

import NodeCollection from './collection/node_collection';
import EdgeCollection from './collection/edge_collection';

import Path from './path';

class Graph {
  constructor() {
    this.__uniqval__ = Number.MAX_SAFE_INTEGER;
    this.__init__();
  }

  __init__() {
    this._lookup = Object.create(null);
    this._nodes = [];
    this._edges = [];
    this._nodeCollections = Object.create(null);
    this._edgeCollections = Object.create(null);
  }

  unit(uniqueID) {
    return this.__lookup[uniqueID];
  }

  nodeCount() {
    return this._nodes.length;
  }

  createNode(entity, properties) {
    return this._createNode(entity, properties, (this.__uniqval__--).toString(16));
  }

  _createNode(entity, properties, uniqueID) {
    return this._addNode(new Node(entity, properties, uniqueID));
  }
}

export default Graph;
