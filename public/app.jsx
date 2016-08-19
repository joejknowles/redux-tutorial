const toggleTodo = (todo) => {
  return Object.assign({}, todo, {completed: !todo.completed});
};
const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };

  deepFreeze(todoBefore);

  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();

const todos = (state = [], action) => {
  if (action.type === 'ADD') {
    return [...state, {
      id: action.id,
      text: action.text,
      completed: false
    }];
  } else {
    return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD',
    text: 'Learn Redux',
    id: 0
  }
  deepFreeze(stateBefore);

  const stateAfter = [
    {
      completed: false,
      text: 'Learn Redux',
      id: 0
    }
  ]

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

testAddTodo();

console.log('tests passed');
