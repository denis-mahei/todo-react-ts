import { FaCheckCircle, FaRegCircle, FaRegTrashAlt } from 'react-icons/fa';
import clsx from 'clsx';

interface TaskProps {
  num: number;
  text: string;
  onDelete: (id: string) => void; // краще явно вказати аргумент
  id: string;
}

const Task: React.FC<TaskProps> = ({
  num,
  text,
  onDelete,
  id,
  isDone,
  handleChange,
}) => {
  return (
    <div className="relative">
      <h3 className="text-center text-2xl text-gray-400 font-bold italic mb-4">
        {' '}
        ToDo #{num + 1}
      </h3>
      <p className={clsx({ 'line-through transition text-red-500': isDone })}>
        {text}
      </p>
      <button
        className="absolute right-0 bottom-0"
        onClick={() => onDelete(id)}
      >
        <span>
          <FaRegTrashAlt />
        </span>
      </button>
      <input
        type="checkbox"
        id={`circle-checkbox-${id}`}
        checked={isDone}
        onChange={() => handleChange(id)}
        className="hidden"
      />
      <label
        htmlFor={`circle-checkbox-${id}`}
        className="cursor-pointer flex items-center select-none absolute right-0 top-0"
      >
        {isDone ? (
          <FaCheckCircle className="text-(--font-color) w-6 h-6" />
        ) : (
          <FaRegCircle className="text-gray-400 w-6 h-6" />
        )}
        <span className="ml-2">{!isDone ? 'in progress' : 'done'}</span>
      </label>
    </div>
  );
};
export default Task;
