import React from 'react';
import Navbar from '../components/Navbar/Navbar';

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
    const handleMenuClick = () => {
        console.log('Menu clicked');
        // Open sidebar or modal
      };

  return (
    <div> {/* Leave space for fixed Navbar */}
      <Navbar onMenuClick={handleMenuClick} />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
