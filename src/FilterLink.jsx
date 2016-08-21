import Link from './Link.jsx';
const { connect } = ReactRedux;
import { changeFilterAction } from './Actions.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(changeFilterAction(ownProps.filter))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link)
