import FilterLink from '../containers/FilterLink.jsx'
export default ({ onFilterChange, visibilityFilter }) => {
  return (
    <div>
      <FilterLink filter='all' >
        Show All
      </FilterLink>
      &nbsp;
      <FilterLink filter='completed' >
        Show Completed
      </FilterLink>
      &nbsp;
      <FilterLink filter='active' >
        Show Todo
      </FilterLink>
    </div>
  );
}
