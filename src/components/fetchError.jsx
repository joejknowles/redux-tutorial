export default ({message, onRetry}) => {
  return (<div>
    <p>
      Couldn't fetch todos. { message }
    </p>
    <button onClick={ onRetry }>retry</button>
  </div>);
}
