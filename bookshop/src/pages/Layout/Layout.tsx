import Header from '@/components/Header/Header';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* <Link to={'bookDetails'}>aaaaaaaaaaaaaaaaaaaaaaaaa</Link> */}
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
