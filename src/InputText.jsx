export default function InputText({ onAddTodo, children }) {
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
      <button>{ children }</button>
      </form>
    </div>
  );
}
