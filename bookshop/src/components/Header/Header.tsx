import SearchBar from '@components/SearchBar/SearchBar';
import '@components/Header/Header.css';
import SelectContainer from '@components/SelectContainer/SelectContainer';

export interface HeaderProps {
  selectSort: (value: string) => void;
  sortingValue: string;

  selectFilter: (value: string) => void;
  filterValue: string;
}

const Header = (props: HeaderProps, searchQuery = 'Search') => {
  const temp_arr = [
    { name: 'Option 1', value: 'Option 1' },
    { name: 'Option 2', value: 'Option 2' },
  ];

  return (
    <div className="header_wrap">
      <h1 className="pageTitle">Search for books</h1>
      <SearchBar searchQuery={'Search'} />
      <div className="bottomHeader">
        <SelectContainer
          optionsArr={temp_arr}
          selectTitle="Categories"
          selectValueFunc={props.selectFilter}
          chosenValue={props.filterValue}
        />
        <SelectContainer
          optionsArr={temp_arr}
          selectTitle="Sorting by"
          selectValueFunc={props.selectSort}
          chosenValue={props.sortingValue}
        />
      </div>
    </div>
  );
};

export default Header;
