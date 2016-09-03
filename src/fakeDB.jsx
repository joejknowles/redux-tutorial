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
    return delay(5000).then(() => {
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
