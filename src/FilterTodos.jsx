import FilterLink from './FilterLink.jsx'
export default function FilterTodos({ onFilterChange, visibilityFilter }) {
  return (
    <div style={{color:'blue'}}>
      <FilterLink filter='SHOW_ALL' >
        Show All
      </FilterLink>
      &nbsp;
      <FilterLink filter='COMPLETED' >
        Show Completed
      </FilterLink>
      &nbsp;
      <FilterLink filter='TODO' >
        Show Todo
      </FilterLink>
    </div>
  );
}
