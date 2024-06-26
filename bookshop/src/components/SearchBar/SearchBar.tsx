import React from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import '../styles/SearchBar.css';
import '../styles/Header.css';

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
