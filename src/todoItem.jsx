export default ({ completed, name, onClick }) => {
  const tick = completed ? <span> ✓</span> : null;
  return (<li onClick={ onClick }>
    { name }
    { tick }
  </li>);
}
