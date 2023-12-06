import './App.css';
import { Header }  from './components/Header';
import { TaskList } from './components/TaskList';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <TaskList />
    </div>
  );
}
