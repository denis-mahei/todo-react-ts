import type { Task } from "@/redux/slices.ts";
import TaskComponent from "@/components/Task/Task.tsx";
import React from "react";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  check: (id: string) => void;
}

const TaskList: React.FC<Partial<TaskListProps>> = ({ tasks }) => {
  return (
    <section className="p-2 md:p-4 w-full">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 my-4">
        {tasks?.map((task, index) => (
          <li
            key={task.id}
            className="w-full border rounded-md p-3.5 bg-(--bg-navbar) shadow-2xl"
          >
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
