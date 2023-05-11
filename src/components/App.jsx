import { AppBar } from './AppBar/AppBar.js';
import { Layout } from './Layout/Layout.js';
import { TaskForm } from './TaskForm/TaskFrom.js';
import { TaskList } from './TaskList/TaskList.js';

const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

export default App;
