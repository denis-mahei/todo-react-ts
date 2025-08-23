import type { Task } from '@/App.tsx';
import { SiTodoist } from 'react-icons/si';

interface NavBarProps {
  submit?: (task: Task) => void;
}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <header className="p-5 bg-(--bg-navbar) border-b-2">
      <nav className="flex items-center gap-2">
        <SiTodoist className="text-4xl" />
        <h1 className="text-2xl font-bold">ToDo List</h1>
      </nav>
    </header>
  );
};
export default NavBar;
