debugger;
let ug = require('./src/graph');
let graph = new ug.Graph();
debugger;
graph.createNode('person', {name: 'Rachael'});
graph.createNode('person', {name: 'Stephanie'});
graph.createNode('person', {name: 'Michael'});
graph.createNode('person', {name: 'Donovan'});

graph.nodes('person').query().filter({name__ilike: 'ae'}).units();