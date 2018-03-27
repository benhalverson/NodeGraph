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
}

export default Graph;
