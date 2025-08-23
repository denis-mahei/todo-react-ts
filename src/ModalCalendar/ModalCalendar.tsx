import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

type Props = { children: ReactNode };

const ModalCalendar = ({ children }: Props) => {
  const container = document.getElementById('modal-root');
  if (!container) return null;
  return createPortal(
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-5/6 backdrop-blur-2xl rounded-lg p-3">
      {children}
    </div>,
    container
  );
};
export default ModalCalendar;
