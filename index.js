debugger;
import ug, { Graph } from './src/index';
console.log(ug);
debugger;
Graph.createNode('person', {name: 'Rachael'});
Graph.createNode('person', {name: 'Stephanie'});
Graph.createNode('person', {name: 'Michael'});
Graph.createNode('person', {name: 'Donovan'});

Graph.nodes('person').query().filter({name__ilike: 'ae'}).units();
console.log('it works?')