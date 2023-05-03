// import { useSelector } from 'react-redux';
import { StatusFilter } from './StatusFilter/StatusFilter.js';
import { TaskList } from './TaskList/TaskList.js';

const App = () => {
  // const value = useSelector(state => state.tasks[0].text);
  // console.log('🚀 ~ value:', value);
  return (
    <div>
      <StatusFilter />
      <TaskList />
    </div>
  );
};

export default App;
