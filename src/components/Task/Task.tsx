import { useDispatch } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import { deleteTask, isDone } from '@/redux/slices.ts';
import { FaCheckCircle, FaRegCircle, FaRegTrashAlt } from 'react-icons/fa';

import clsx from 'clsx';

interface TaskProps {
  num: number;
  text: string;
  id: string;
  check: boolean;
  deadline: string | null;
  handleChange?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ num, text, id, check, deadline }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(id));

  const isOverdue =
    !!deadline && new Date(deadline).getTime() < Date.now() && !check;

  const formattedDeadline = deadline
    ? formatDistanceToNow(new Date(deadline), { addSuffix: true })
    : null;

  return (
    <div className="relative">
      <h3 className="text-2xl text-gray-400 font-bold italic mb-4">
        {' '}
        ToDo #{num + 1}
      </h3>
      <p className={clsx({ 'line-through transition text-red-500': check })}>
        {text}
      </p>
      {deadline && (
        <p
          className={clsx('flex items-center gap-2 mt-2 text-sm', {
            'text-red-500': isOverdue,
            'text-green-500': !isOverdue,
          })}
        >
          <span>🔥</span> Deadline: {formattedDeadline}
        </p>
      )}
      <button className="absolute right-0 bottom-0" onClick={handleDelete}>
        <span>
          <FaRegTrashAlt />
        </span>
      </button>
      <input
        type="checkbox"
        id={`circle-checkbox-${id}`}
        checked={check}
        onChange={() => dispatch(isDone(id))}
        className="hidden"
      />
      <label
        htmlFor={`circle-checkbox-${id}`}
        className="cursor-pointer flex items-center select-none absolute right-0 top-0"
      >
        {check ? (
          <FaCheckCircle className="text-(--font-color) w-6 h-6" />
        ) : (
          <FaRegCircle className="text-gray-400 w-6 h-6" />
        )}
        <span className="ml-2">{!check ? 'in progress' : 'done'}</span>
      </label>
    </div>
  );
};
export default Task;
