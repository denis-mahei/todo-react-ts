import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar/NavBar.tsx';
import Text from '@/components/Text/Text.tsx';
import TaskList from '@/components/TaskList/TaskList.tsx';
import type { SubmitHandler } from 'react-hook-form';

export interface Task {
  id: string;
  text: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('todos');
    if (saved !== null) return JSON.parse(saved);

    return [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask: SubmitHandler<Task> = (newTask: Task) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (task: string): void => {
    setTasks((prev) => prev.filter((t) => t.id !== task));
  };

  const handleChecked = (id: string) => {
    setTasks((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <>
      <NavBar submit={addNewTask} />

      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={deleteTask} check={handleChecked} />
      ) : (
        <Text>Create your first ToDo</Text>
      )}
    </>
  );
}

export default App;
