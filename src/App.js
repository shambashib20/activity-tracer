

import Header from './components/Header';
import AddTask from './components/AddTask';
import Task from './Components/Task';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />


      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Task
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No Tasks To Show'
      )}




      <Footer />
    </div>
  );
}

export default App;
