import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage.js';
import { LoginPage } from 'pages/LoginPage.js';
import { RegisterPage } from 'pages/RegisterPage.js';
import { TasksPage } from 'pages/TasksPage.js';
import { Layout } from './Layout.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations.js';

const App = () => {
  const disptach = useDispatch();

  useEffect(() => {
    disptach(refreshUser());
  }, [disptach]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Route>
      </Routes>
    </div>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<HomePage />} />
    //     <Route path="login" element={<LoginPage />} />
    //     <Route path="register" element={<RegisterPage />} />
    //     <Route path="tasks" element={<TasksPage />} />
    //   </Route>
  );
};

export default App;
