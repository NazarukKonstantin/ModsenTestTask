import React, { useState } from 'react';
import { iPost } from 'src/models';
import SearchBar from '../SearchBar/SearchBar';
import MySelect from '../UI/MySelect/MySelect';
import '../styles/Header.css';
import SelectContainer from '../SelectContainer/SelectContainer';

interface HeaderProps {
  create: (post: iPost) => void;

  selectSort: (value: string) => void;
  sortValue: string;

  selectFilter: (value: string) => void;
  filterValue: string;
}

const Header = (props: HeaderProps, searchQuery = 'Search') => {
  //const [post, setPost] = useState({ id: 1, title: '', body: '' });

  // const addNewPost = (e: any) => {
  //   e.preventDefault();
  //   const newPost = {
  //     ...post,
  //     id: Date.now(),
  //   };
  //   props.create(newPost);
  //   setPost({ id: 1, title: 'newPost.title', body: '' });
  // };

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
          chosenValue={props.sortValue}
        />
      </div>
    </div>
  );
};

export default Header;