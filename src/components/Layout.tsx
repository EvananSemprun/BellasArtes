import Navbar from './Navbar/Navbar'; 
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '4rem' }}> 
        <Outlet /> 
      </div>
    </>
  );
};

export default Layout;
