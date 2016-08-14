const addCounter = (listBefore) => {
  const listAfter = [...listBefore, 0];
  return listAfter;
}

const removeCounter = (listBefore, index) => {
  const listAfter = [...listBefore.slice(0, index), ...listBefore.slice(index + 1)];
  return listAfter;
}

const incrementCounter = (list, index) => {
  const listAfter = [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)];
  return listAfter;
}

const testIncrementCounter = () => {
  const listBefore = [3, 5, 1];
  const listAfter = [3, 6, 1];
  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
}

const testRemoveCounter = () => {
  const listBefore = [9, 4, 10, 4];
  const listAfter = [9, 10, 4];
  deepFreeze(listBefore);
  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
}

const testAddCounter = () => {
  const listBefore = [];
  deepFreeze(listBefore);
  const listAfter = [0];
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('Passed.');

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={ onIncrement }>+</button>
    <button onClick={ onDecrement }>-</button>
  </div>
);

const Counters = ({
  counters
}) => {

  <div>

  </div>
}

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
      value={ store.getState() }
      onIncrement={()=>{
        store.dispatch({type: 'INCREMENT'});
      }}
      onDecrement={()=>{
        store.dispatch({type: 'DECREMENT'});
      }}/>,
    document.getElementById('root')
  );
};

store.subscribe(() => {
  render();
});

render();
