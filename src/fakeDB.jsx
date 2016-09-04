import { generate } from 'shortid'

const fakeData = {
  todos: [
    {
      id: 'wiubyur',
      name: 'first to do',
      completed: false
    },
    {
      id: 'wiub2yur',
      name: 'second to do',
      completed: true
    },
    {
      id: 'wi3ubyur',
      name: 'next to do',
      completed: false
    },
    {
      id: 'wi4ubyur',
      name: 'another to do',
      completed: true
    },
    {
      id: 'wi5ubyur',
      name: 'this to do',
      completed: false
    },
    {
      id: 'wiuby6ur',
      name: 'last to do',
      completed: false
    },
  ]
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) => {
    return delay(500).then(() => {
      if (Math.random() > 0.5){
        throw new Error('ahh no!!');
      }
      switch (filter) {
        case 'all':
          return fakeData.todos;
        case 'active':
          return fakeData.todos.filter((todo) => !todo.completed);
        case 'completed':
          return fakeData.todos.filter((todo) => todo.completed);
        default:
          return fakeData.todos;
      }
    });
};

export const addTodo = (name) => {
  return delay(500).then(() => {
    const todo = {
      id: generate(),
      name,
      completed: false
    };
    fakeData.todos.push(todo);
    return todo;
  });
};

export const toggleTodo = (id) => {
  return delay(500).then(() => {
    const todo = fakeData.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
};
