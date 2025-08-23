import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useDispatch } from 'react-redux';
import { addTask } from '@/redux/slices.ts';
import type { Task } from '@/App.tsx';
import type { AppDispatch } from '@/redux/store.ts';
import ModalCalendar from '@/ModalCalendar/ModalCalendar.tsx';

import { VscSaveAs, VscCalendar } from 'react-icons/vsc';
import 'react-day-picker/style.css';

const Form = () => {
  const { register, handleSubmit, reset } = useForm<any>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selected, setSelected] = useState<Date | undefined>();
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
    <form
      onSubmit={handleSubmit(handleAdd)}
      className="flex p-2 flex-wrap items-center justify-between md:p-6"
    >
      <div className="flex items-center relative mr-4">
        <input
          type="text"
          className="w-full rounded-md border-2 transition-colors outline-none focus:border-(--font-color) py-1 px-2 mr-1 text-blue-50 mb-2"
          {...register('text', { required: true })}
          placeholder="Type your ToDo..."
        />
        <button
          type="button"
          aria-label="Pick deadline"
          onClick={() => setIsCalendarOpen((c) => !c)}
          className="absolute top-1 right-3 p-0"
        >
          <VscCalendar size="24px" />
        </button>
      </div>
      <button type="submit" aria-label="Save task" className="p-0">
        <VscSaveAs size="34px" />
      </button>
      {isCalendarOpen && (
        <ModalCalendar>
          <DayPicker
            animate
            mode="single"
            selected={selected}
            onSelect={(date) => {
              setSelected(date as Date | undefined);
              setIsCalendarOpen(false);
            }}
            showOutsideDays
            footer={
              selected
                ? `Selected: ${selected.toLocaleDateString()}`
                : 'Pick a day.'
            }
          />
        </ModalCalendar>
      )}
      <p className="order-1">Selected date {selected?.toLocaleDateString()}</p>
    </form>
  );
};
export default Form;
