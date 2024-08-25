import { NavBar } from '@/components/NavBar/NavBar';

export const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
