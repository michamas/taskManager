import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button.js';
import { statusFilters } from 'redux/constants.js';
// import the filter value object
import { getStatusFilter } from 'redux/selectors.js';
// Import the action generator
import { setStatusFilter } from 'redux/filtersSlice.js';
import css from './StatusFilter.module.css';

/* 
useSelector - subscribes componenets to the parts 
of the Redux state that they need
const value = useSelector(state => state.some.value);
*/
export const StatusFilter = () => {
  // Get a link to the action dispatch function
  const dispatch = useDispatch();

  // get filter value from Redux state
  const filter = useSelector(getStatusFilter);

  //  Call the action generator and pass the filter value
  // Sending the result - filter change action
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => handleFilterChange(statusFilters.all)}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.active)}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.completed)}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
