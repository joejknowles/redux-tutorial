export default ({children, onClick, active}) => {
  if (active)
    return <span>{ children }</span>;
  return (<a
    style={ {textDecoration: 'underline', cursor: 'pointer' } }
    onClick={ onClick }>{ children }</a>);
}
