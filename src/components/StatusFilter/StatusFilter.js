import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button.js';
import { statusFilters } from 'redux/constants.js';
import { getStatusFilter } from 'redux/selector.js';
import css from './StatusFilter.module.css';
import { setStatusFilter } from 'redux/actions.js';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => handleFilterChange(statusFilters.all)}
        type="button"
        selected={filter === statusFilters.all}
      >
        Add
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.active)}
        type="button"
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.completed)}
        type="button"
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
