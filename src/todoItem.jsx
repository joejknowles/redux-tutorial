export default function TodoItem({ completed, name, onClick }) {
    const tick = completed ? <span> ✓</span> : null;
    return (<li onClick={ onClick }>
      { name }
      { tick }
    </li>);
}
