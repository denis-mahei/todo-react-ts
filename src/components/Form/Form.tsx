import { useForm } from 'react-hook-form';
import type { Task } from '@/App.tsx';

interface FormProps {
  onAdd: (task: Task) => void;
}

const Form: React.FC<FormProps> = ({ onAdd }) => {
  const { register, handleSubmit, reset } = useForm<any>();

  const handleAdd = (task: Task) => {
    onAdd({
      id: Date.now().toString(),
      text: task.text,
      isDone: false,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleAdd)}>
      <input
        type="text"
        className="rounded-lg border-2 transition-colors outline-none focus:border-(--font-color) py-1 px-2 mr-1 text-blue-50"
        {...register('text', { required: true })}
        placeholder="Type your ToDo..."
      />
      <button>Save</button>
    </form>
  );
};
export default Form;
