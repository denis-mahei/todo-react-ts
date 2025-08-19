import NavBar from '@/components/NavBar/NavBar.tsx';
import Sidenav from '@/components/Sidenav/Sidenav.tsx';

export interface Task {
  id: string;
  text: string;
  isDone: boolean;
  deadline: string | null;
}

const App = () => {
  return (
    <>
      <NavBar />
      <Sidenav />
    </>
  );
};

export default App;
