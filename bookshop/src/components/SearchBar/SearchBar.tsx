import React from 'react';
import MyInput from '@uiMyInput/MyInput';
import MyButton from '@uiMyButton/MyButton';
import '@components/SearchBar/SearchBar.css';

interface searchBarProps {
  searchQuery: string;
}

const SearchBar = ({ searchQuery }: searchBarProps) => {
  return (
    <div className="searchBarContainer">
      <MyInput
        className="searchBar"
        type="text"
        value={searchQuery}
        //onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Search"
      />
      <MyButton />
    </div>
  );
};

export default SearchBar;
