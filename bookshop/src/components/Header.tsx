import React, { useState } from 'react';
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton';
import { iPost } from 'src/models';
import MySelect from './UI/MySelect/MySelect';
import '../styles/Header.css';

interface HeaderProps {
  create: (post: iPost) => void;
  selectSort: (value: string) => void;
  selectorValue: string;

  selectFilter: (value: string) => void;
  filterValue: string;
}

const Header = (props: HeaderProps, searchQuery = 'Search') => {
  const [post, setPost] = useState({ id: 1, title: '', body: '' });

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
      <div className="searchBarContainer">
        <MyInput
          className="searchBar"
          type="text"
          //value={searchQuery}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Search"
        />
        <MyButton />
      </div>
      <div className="bottomHeader">
        <div className="selectWithTitle">
          <h4 className="selectTitle">Categories</h4>
          <MySelect
            selectTitle="CategoryFilters"
            options={temp_arr}
            onChange={(filter: string) => props.selectFilter(filter)}
            selectValue={props.filterValue}
          />
        </div>
        <div className="selectWithTitle">
          <h4 className="selectTitle">Sorting by</h4>
          <MySelect
            selectTitle="SortingBy"
            options={temp_arr}
            onChange={(sort: string) => props.selectSort(sort)}
            selectValue={props.selectorValue}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
