import Form from '@/components/Form/Form.tsx';
import type { Task } from '@/App.tsx';

interface NavBarProps {
  submit: (task: Task) => void;
}

const NavBar: React.FC<NavBarProps> = ({ submit }) => {
  return (
    <header className="p-5 p-3 flex justify-between items-center bg-(--bg-navbar) border-b border-b-2">
      <nav className="flex items-center gap-2 ">
        <img src="/assets/react.svg" alt="logo" />
        <h1 className="text-2xl font-bold">ToDo List</h1>
      </nav>
      <Form onAdd={submit} />
    </header>
  );
};
export default NavBar;
