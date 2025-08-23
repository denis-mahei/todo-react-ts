import type { Task } from '@/App.tsx';
import TaskComponent from '@/components/Task/Task.tsx';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  check: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <section className="p-2 md:p-6 w-full">
      <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {tasks.map((task, index) => (
          <li key={task.id} className="w-full border rounded-md p-3.5">
            <TaskComponent
              text={task.text}
              num={index}
              id={task.id}
              check={task.isDone}
              deadline={task.deadline}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TaskList;
