import TaskList from '@/components/TaskList/TaskList.tsx';
import Text from '@/components/Text/Text.tsx';
import { useSelector } from 'react-redux';
import { selectTasks } from '@/redux/slices.ts';
import Form from '@/components/Form/Form.tsx';

const Sidenav = () => {
  const tasks = useSelector(selectTasks);

  return (
    <main className="flex md:flex-row p-6 sm:flex-col">
      <div className="flex flex-col gap-4">
        <Form />
      </div>
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        <Text>Create your first ToDo</Text>
      )}
    </main>
  );
};
export default Sidenav;
