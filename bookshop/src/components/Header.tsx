import React, { useState } from 'react';
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton';
import { iPost } from 'src/models';
import MySelect from './UI/MySelect/MySelect';
import '../styles/Header.css';

interface HeaderProps {
  create: (post: iPost) => void;
  selectSort: (value: string) => void;
  selectorValue:string;

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

  return (
    <div className='header_wrap'>
      {/* <img className='backgroundWallpaper' src="./assets/header_background.jpg" alt="books wallpaper"/> */}
      <h1 className='pageTitle'>Search for books</h1>
      <MyInput
        className='searchBar'
        type="text"
        //value={searchQuery}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Search"
      />
      <MyButton className='searchIcon'></MyButton>
      <h4 className='selectTitle'>Categories</h4>
      <MySelect selectTitle="CategoryFilters" options={[]} onChange={(filter:string) => props.selectSort(filter)} selectValue={props.filterValue}/>
      <h4 className='selectTitle'>Sorting by</h4>
      <MySelect selectTitle="SortingBy" options={[]} onChange={(sort:string) => props.selectSort(sort)} selectValue={props.selectorValue}/>
    </div>
  );
};

export default Header;
