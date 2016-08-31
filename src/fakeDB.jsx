
const fakeData = {
  todos: [
    {
      id: 'wiubyur',
      text: 'first to do',
      completed: false
    },
    {
      id: 'wiub2yur',
      text: 'second to do',
      completed: true
    },
    {
      id: 'wi3ubyur',
      text: 'next to do',
      completed: false
    },
    {
      id: 'wi4ubyur',
      text: 'another to do',
      completed: true
    },
    {
      id: 'wi5ubyur',
      text: 'this to do',
      completed: false
    },
    {
      id: 'wiuby6ur',
      text: 'last to do',
      completed: false
    },
  ]
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) => {
    return delay(500).then(() => {
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
