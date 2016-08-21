export default ({ onAddTodo }) => {
  let input;
  return (
    <div>
      <form onSubmit={(e) => {
          e.preventDefault();
          if (input.value) {
            onAddTodo(input.value);
            input.value = '';
          }
        }
      }>
        <input
        autoFocus={true}
        ref={(node)=> input = node}/>
      <button>Add Todo</button>
      </form>
    </div>
  );
}
