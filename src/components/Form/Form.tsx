import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useDispatch } from 'react-redux';
import { addTask } from '@/redux/slices.ts';
import type { Task } from '@/App.tsx';
import type { AppDispatch } from '@/redux/store.ts';

import 'react-day-picker/style.css';

const Form = () => {
  const { register, handleSubmit, reset } = useForm<any>();
  const [selected, setSelected] = useState<Date>();
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = (task: Task) => {
    dispatch(
      addTask({
        id: Date.now().toString(),
        text: task.text,
        isDone: false,
        deadline: selected ? selected.toISOString() : null,
      })
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleAdd)} className="p-6">
      <input
        type="text"
        className="w-full rounded-md border-2 transition-colors outline-none focus:border-(--font-color) py-1 px-2 mr-1 text-blue-50 mb-2"
        {...register('text', { required: true })}
        placeholder="Type your ToDo..."
      />
      <DayPicker
        animate
        mode="single"
        selected={selected}
        onSelect={setSelected}
        showOutsideDays
        footer={
          selected
            ? `Deadline: ${selected.toLocaleDateString()}`
            : 'Pick a day.'
        }
      />
      <button>Save</button>
    </form>
  );
};
export default Form;
