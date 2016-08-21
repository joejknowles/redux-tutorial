import Link from './Link.jsx';
const { connect } = ReactRedux;

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link)
