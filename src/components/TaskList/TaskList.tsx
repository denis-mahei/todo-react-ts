import TaskComponent from '@/components/Task/Task.tsx';
import type { Task } from '@/App.tsx';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  check: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, check }) => {
  return (
    <section className="p-6">
      <ul className="grid grid-cols-1 place-items-center gap-y-2 gap-x-2">
        {tasks.map((task, index) => (
          <li key={task.id} className="w-full border rounded-md p-3.5">
            <TaskComponent
              num={index}
              text={task.text}
              onDelete={onDelete}
              id={task.id}
              isDone={task.isDone}
              handleChange={check}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TaskList;
