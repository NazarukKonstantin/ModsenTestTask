import Header from '@/components/Header/Header';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { HeaderProps } from '@/components/Header/Header';

const Layout = ({selectSort,sortingValue,selectFilter,filterValue}:HeaderProps) => {
  return (
    <div>
      {/* <Link to={'bookDetails'}>aaaaaaaaaaaaaaaaaaaaaaaaa</Link> */}
      <Header selectFilter={selectFilter} sortingValue={sortingValue} selectSort={selectSort} filterValue={filterValue}/>
      <Outlet />
    </div>
  );
};

export default Layout;
