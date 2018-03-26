import NodeGraph from './src/NodeGraph';
jest.mock('../src/NodeGraph');

it('does a full mock', () => {
  expect(NodeGraph.to.be(undefined));
});
