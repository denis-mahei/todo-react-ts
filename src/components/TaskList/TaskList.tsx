import type { Task } from '@/redux/slices.ts';
import TaskComponent from '@/components/Task/Task.tsx';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  check: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <section className="p-2 md:p-4 w-full">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4">
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
